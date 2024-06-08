<?php

namespace App\Http\Controllers;

use App\Models\Location;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with('user')->paginate(10);
        if ($orders) {
            foreach ($orders as $order) {
                foreach ($order->items as $order_items) {
                    $product = Product::where("id", $order_items->product_id)->pluck('name');
                    $order_items->prodct_name = $product['0'];
                }
            }

            return response()->json($orders, 200);
        } else
            return response()->json(["message" => "Sin ordenes"], 404);
    }


    public function show($id)
    {
        $order = Order::find($id);
        if ($order) {
            return response()->json($order, 200);
        } else
            return response()->json(["message" => "No se encontro la orden"], 404);
    }

    public function store(Request $request)
    {
        try {
            $location = Location::where('user_id', Auth::id())->first();
            $request->validate([
                'order_items' => 'required',
                'total_price' => 'required',
                'quantity' => 'required',
                'date_of_delivery' => 'required'
            ]);
            $order = new order();
            $order->location_id = $request->location_id;
            $order->total_price = $request->total_price;
            $order->date_of_delivery = $request->date_of_delivery;
            $order->save();

            foreach ($request->order_items as $order_item) {
                $items = new OrderItem();
                $items->order_id = $order->id;
                $items->price = $order_item['price'];
                $items->product_id = $order_item['product_id'];
                $items->quantity = $order_item['quantity'];
                $items->save();
                $product = Product::where('id', $order_item['product_id'])->first();
                $product->quantiy = $order_item['quantity'];
                $product->save();
            }
            return response()->json(['message' => 'order is added'], 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function get_order_items($id)
    {
        $order_items = OrderItem::where('order_id', $id)->get();
        if ($order_items) {
            foreach ($order_items as $order_item) {
                $product = Product::where("id", $order_item->product_id)->pluck('name');
                $order_item->prodct_name = $product['0'];

            }
            return response()->json($order_items, 200);

        } else
            return response()->json('no se encontraron items', 404);
    }

    public function change_order_status($id, Request $request)
    {
        $order = Order::find($id);
        if ($order) {
            $order->update(['status' => $request->status]);
            return response()->json('Status actualizado', 200);

        } else
            return response()->json('no se encontró orden', 404);

    }
    public function get_users_orders($id)
    {
        $orders = Order::where('user_id', $id)
            ::with('items', function ($query) {
                $query->orderBy('created_at', 'desc');
            })->get();
        if ($orders) {
            foreach ($orders->items as $order) {
                $product = Product::where('id', $order->product_id)->pluck('name');
                $order->product_name = $product['0'];
            }
            return response()->json($orders, 200);

        } else
            return response()->json('no se encontraron ordenes', 404);
    }
}
