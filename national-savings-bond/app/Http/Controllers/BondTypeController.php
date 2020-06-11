<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BondType;
use App\Events\BondTypeInserted;

class BondTypeController extends Controller
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

    public function list($page=1)
    {
        $result='';
        
        if($page == 1){
            $result = BondType::orderby('amount','DESC')->skip(0)->take(5)->get();
        }
        else{
            $result = BondType::orderby('amount','DESC')->skip(($page-1)*5)->take(5)->get();
        }
        
        $total_page = ceil(BondType::count()/5);

        $total_pages=[];
        
        for($i=1;$i<=$total_page;$i++){
            $total_pages[] = $i; 
        }
        
        if($result)
        {
            return response()->json([
                'status'      => true,
                'data'        => $result,
                'total_pages' => $total_pages,
                'message'     => "The Data Sucessfully Retrieved."
            ]);
        }
    }

    public function edit($id)
    {
        $result=BondType::where('id',$id)->first();
        
        if($result)
        {
            return response()->json([
                'status'  => true,
                'data'    => $result,
                'message' => "The Data Sucessfully Retrieved."
            ]);
        }
    }

    public function delete(Request $request)
    {
        $rules = [

                'id'=>'required|exists:bond_types,id'
        ];

        $validator = \Validator::make($request->all(),$rules);  

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'errors'=>$validator->errors()
            ],200);
        }

        $result = BondType::where('id',$request->id)->delete();

        if($result)
        {
            return response()->json([
                'status' => true,
                'message' => "The Data has been Deleted."
            ]);
        }
    }

    public function store(Request $request)
    {
        $rules = [

                'amount'=>'required|unique:bond_types,amount',
                'status'=>'required',
                'first_prize'=>'required',
                'second_prize'=>'required',
                'third_prize'=>'required'
        ];

        $validator = \Validator::make($request->all(),$rules);  

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

    public function update(Request $request)
    {
        $rules = [
                'id'=>'required|exists:bond_types,id',
                'amount'=>'required',
                'status'=>'required',
                'first_prize'=>'required',
                'second_prize'=>'required',
                'third_prize'=>'required'
        ];

        $validator = \Validator::make($request->all(),$rules);  

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'errors'=>$validator->errors()
            ],200);
        }

        $result=BondType::where('id',$request->id)->update([
             'amount'=>$request->amount,
             'status'=>$request->status,
             'first_prize'=>$request->first_prize,
             'second_prize'=>$request->second_prize,
             'third_prize'=>$request->third_prize
        ]);
        
        if($result)
        {
            return response()->json([
                'status' => true,
                'message' => "The Data has been Updated."
            ]);
        }
        
    }
}
