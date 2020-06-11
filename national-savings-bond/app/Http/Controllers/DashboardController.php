<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BondType;
use App\Events\BondTypeInserted;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function stats()
    {
        $bondtype_count = BondType::count();

        return response()->json([
                'status'      => true,
                'bondtype_count' => $bondtype_count,
                'message'     => "The Data Sucessfully Retrieved."
            ]);
    }

}
