<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::paginate(10);
        return response()->json($category, 200);
    }

    public function show($id)
    {
        $category = Category::find($id);
        if ($category) {
            return response()->json($category, 200);
        } else {
            return response()->json('Category not found', 404);
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:categories,name',
                'image' => 'required',
            ]);
            $category = new Category();
            // if ($request->hasFile('image')) {
            //     $path = 'assets/uploads/category/' . $category->image;
            //     if (File::exists($path)) {
            //         File::delete($path);

            //     }
            //     $file = $request->file('image');
            //     $ext = $file->getClientOriginalExtension();
            //     $filename = time() . '.' . $ext;
            //     try {
            //         $file->move('assets/uploads/category/', $filename);
            //     } catch (FileException $e) {
            //         dd($e->getMessage());
            //     }
            //     $category->image = $filename;
            // }
            $category->name = $request->name;
            $category->image = $request->image;
            $category->save();
            return response()->json($category, 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|unique:categories,name',
                'image' => 'required',

            ]);
            $category = Category::find($id);
            if ($request->hasFile('image')) {
                $path = 'assets/uploads/category/' . $category->image;
                if (File::exists($path)) {
                    File::delete($path);

                }
                $file = $request->file('image');
                $ext = $file->getClientOriginalExtension();
                $filename = time() . '.' . $ext;
                try {
                    $file->move('assets/uploads/category/', $filename);
                } catch (FileException $e) {
                    dd($e->getMessage());
                }
                $category->image = $filename;
            }
            $category->name = $request->name;
            $category->update();
            return response()->json('Category updated', 200);

        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);

        }
    }
    public function delete($id)
    {
        try {
            $category = Category::find($id);
            if ($category) {
                $category->delete();
                return response()->json('Category deleted', 200);

            } else {
                return response()->json('Category not found', 404);

            }
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);

        }
    }
}
