<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::paginate(10);
        if ($products) {
            return response()->json($products, 200);
        } else
            return response()->json(["message" => "Sin productos"], 404);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required|numeric',
            'category_id' => 'required|numeric',
            'brand_id' => 'required|numeric',
            'discount' => 'numeric',
            'amount' => 'required|numeric',
            'image' => 'required',
        ]);
        $product = new Product();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->discount = $request->discount;
        $product->amount = $request->amount;
        if ($request->hasFile('image')) {
            $path = 'assets/uploads/product/' . $product->image;
            if (File::exists($path)) {
                File::delete($path);

            }
            $file = $request->file('image');
            $ext = $file->getClientOriginalExtension();
            $filename = time() . '.' . $ext;
            try {
                $file->move('assets/uploads/product/', $filename);
            } catch (FileException $e) {
                dd($e->getMessage());
            }
            $product->image = $filename;
        }
        $product->save();
        return response()->json('product added', 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::find($id);
        if ($product) {
            return response()->json($product, 200);
        } else
            return response()->json(["message" => "Sin productos"], 404);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required|numeric',
            'category_id' => 'required|numeric',
            'brand_id' => 'required|numeric',
            'discount' => 'required|numeric',
            'amount' => 'required|numeric',
            'image' => 'required',
        ]);
        $product = Product::find($id);
        if ($product) {
            $product->name = $request->name;
            $product->price = $request->price;
            $product->category_id = $request->category_id;
            $product->brand_id = $request->brand_id;
            $product->discount = $request->discount;
            $product->amount = $request->amount;
            if ($request->hasFile('image')) {
                $path = 'assets/uploads/product/' . $product->image;
                if (File::exists($path)) {
                    File::delete($path);

                }
                $file = $request->file('image');
                $ext = $file->getClientOriginalExtension();
                $filename = time() . '.' . $ext;
                try {
                    $file->move('assets/uploads/product/', $filename);
                } catch (FileException $e) {
                    dd($e->getMessage());
                }
                $product->image = $filename;
            }
            $product->save();
            return response()->json('product actualizado', 200);

        } else
            return response()->json(["message" => "Producto no encontrado"], 404);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete($id)
    {
        try {
            $product = Product::find($id);
            if ($product) {
                $product->delete();
                return response()->json('Product deleted', 200);

            } else {
                return response()->json('Product not found', 404);

            }
        } catch (FileException $e) {
            return response()->json($e->getMessage(), 500);

        }
    }
}
