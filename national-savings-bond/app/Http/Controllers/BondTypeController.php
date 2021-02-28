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
            $result = BondType::orderby('id','DESC')->skip(0)->take(5)->get();
        }
        else{
            $result = BondType::orderby('id','DESC')->skip(($page-1)*5)->take(5)->get();
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

    public function delete($id)
    {
        //dd($id);
        $rules = [

                'id'=>'required|exists:bond_types,id,deleted_at,NULL'
        ];

        $data = [
           'id'=>$id
        ];

        //dd($rules,$data);

        $validator = \Validator::make($data,$rules);  

        //dd($validator->errors());

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'errors'=>$validator->errors()
            ],200);
        }

        $result = BondType::where('id',$id)->delete();

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

                'amount'=>'required|unique:bond_types,amount,NULL,id,deleted_at,NULL',
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
        //dd($request->all());
        //$data = $request->all();
        //unset($data["_method"]); 
        $remove = ['id'=>'1','_method'=>'method'];
        $data = array_diff_key($request->all(),$remove);
        //$data = array_intersect_key($request->all(),$remove);
        //dd($remove,$request->all());
        // dd($data);

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

        /*$result=BondType::where('id',$request->id)->update([
             'amount'=>$request->amount,
             'status'=>$request->status,
             'first_prize'=>$request->first_prize,
             'second_prize'=>$request->second_prize,
             'third_prize'=>$request->third_prize
        ]);*/

        $result=BondType::where('id',$request->id)->update($data);
        
        if($result)
        {
            return response()->json([
                'status' => true,
                'message' => "The Data has been Updated."
            ]);
        }
        
    }
}
