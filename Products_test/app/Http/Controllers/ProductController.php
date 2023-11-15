<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductsStoreRequest;
use App\Http\Requests\ProductsUpdateRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductsStoreRequest $request)
    {
        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'category' => $request->category
        ]);
        return response()->json([
            'Message' => 'Product created successfully.'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::findOrFail($id);

        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductsUpdateRequest $request, string $id)
    {
        $product = Product::find($id);

        $product->update([
            'name' => $request->name,
            'price' => $request->price,
            'category' => $request->category
        ]);

        return response()->json([
            'Message' => 'Product updated successfully.'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        $product->delete();

        return response()->json([
            'Message' => 'Product deleted successfully,'
        ], 202);
    }
}
