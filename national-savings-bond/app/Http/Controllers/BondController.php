<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BondType;
use App\Events\BondTypeInserted;

class BondController extends Controller
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

    public function store(Request $request)
    {
        //dd($request->all());
        $rules = [

             '*.serial_no' => 'required|integer',
        ];

        $customMessages = [
             'required' => 'The :attribute field is require.'
        ];

        $validator = \Validator::make($request->all(),$rules,$customMessages);  

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'errors'=>$validator->errors()
            ],200);
        }

        $result=BondType::insert([
             'amount'=>$request->amount,
             'status'=>$request->status,
             'first_prize'=>$request->first_prize,
             'second_prize'=>$request->second_prize,
             'third_prize'=>$request->third_prize
        ]);
        
        event(new BondTypeInserted('success'));

        if($result)
        {
            return response()->json([
                'status' => true,
                'message' => "The Data has been Inserted."
            ]);
        }
        
    }


}
