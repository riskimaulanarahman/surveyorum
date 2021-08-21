<?php

namespace App\Http\Controllers\masteruser;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Hash;
use App\User;
use App\Customer;

class LoginAndroidController extends Controller
{
    public function login(Request $req) {
        $check = User::select('id','npo','nama_lengkap','email','role','password')
        ->where('role','fv')
        ->where('npo',$req->npo)
        ->orWhere('email',$req->email)
        ->first();

        if($check['role'] == 'fv') { 
            if (Hash::check($req->password, $check->password))
            {
                $data = [
                    "status" => true,
                    "data" => $check,
                    "message" => "Berhasil Login",
                ];
            } else {
                $data = [
                    "status" => false,
                    "data" => null,
                    "message" => "Gagal Login",
                ];
            }
        } else {
            $data = [
                "status" => false,
                "data" => null,
                "message" => "Belum Terdaftar",
            ];
        }

        return response()->json($data);
    }

    public function indexcustomer(Request $req) {
        try {
            
            $data = Customer::with(['users','userfv'])->get();

            return response()->json(['status' => true, "message" => "Menampilkan Data Customer" , 'data' => $data]);

        } catch (\Exception $e){

            return response()->json(["status" => false, "message" => $e->getMessage()]);
        }
    }

    public function updatecustomer(Request $req, $id) {
        $iduser = $req->iduser;

        $date = $req->tgl_lahir_cust;
        $fixed = date('Y-m-d', strtotime(substr($date,0,10)));
        $date2 = $req->tgl_lahir_pasangan;
        $fixed2 = date('Y-m-d', strtotime(substr($date2,0,10)));

        $reqData = $req->all();
        if($date) {
            $reqData['tgl_lahir_cust'] = $fixed;
        }
        if($date2) {
            $reqData['tgl_lahir_pasangan'] = $fixed2;
        }

        $reqData['id_fv'] = $iduser;
        
        try {
            $data = Customer::findOrFail($id);

            $data->update($reqData);
            return response()->json(["status" => "success", "message" => "Berhasil Ubah Data"]);

        } catch (\Exception $e){

            return response()->json(["status" => "error", "message" => $e->getMessage()]);
        }
    }
}
