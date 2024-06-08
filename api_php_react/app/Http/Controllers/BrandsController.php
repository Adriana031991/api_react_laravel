<?php

namespace App\Http\Controllers;

use App\Models\Brands;
use Exception;
use Illuminate\Http\Request;

class BrandsController extends Controller
{
    public function index()
    {
        $brands = Brands::paginate(10);
        return response()->json($brands, 200);
    }

    public function show($id)
    {
        $brands = Brands::find($id);
        if ($brands) {
            return response()->json($brands, 200);
        } else {
            return response()->json('brand not found', 404);
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:brands,name',
            ]);
            $brand = new Brands();
            $brand->name = $request->name;
            $brand->save();
            return response()->json($brand, 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:brands,name',
            ]);
            $brand = Brands::where('id', $id)->update(['name' => $request->name]);
            return response()->json('brand updated', 200);

        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);

        }
    }
    public function delete($id)
    {
        try {
            $brand = Brands::find($id);
            if ($brand) {
                $brand->delete();
                return response()->json('brand deleted', 200);

            } else {
                return response()->json('brand not found', 404);

            }
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);

        }
    }
}
