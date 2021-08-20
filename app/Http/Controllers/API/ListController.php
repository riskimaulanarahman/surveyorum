<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use Hash;
use App\Jabatan;
use App\SuratMasuk;
use App\SuratKeluar;
use App\Disposisi;
use App\Karyawan;
use Illuminate\Support\Carbon;
use Auth;


class ListController extends Controller
{

    public function listSuratPelayanan() {

        $data = DB::table('ref_jenis_surat_pelayanan')
        ->select('id_jenis_surat_pelayanan','nama_jenis_surat_pelayanan')
        ->whereNotIn('nama_jenis_surat_pelayanan',['Surat Pernyataan Ahli Waris','Surat Keterangan Cerai Ghaib','Surat Keterangan Pertanahan'])
        ->get();

        return $data;
    }

    public function listSuratVital() {
        $user = Auth::user();

        if($user->role == 'supervisor' && $user->jabatan == 'Kasi Pemerintahan & PP') {
            $data = DB::table('ref_jenis_surat_pelayanan')
            ->select('id_jenis_surat_pelayanan','nama_jenis_surat_pelayanan')
            ->whereIn('nama_jenis_surat_pelayanan',['Surat Keterangan Pertanahan'])
            ->get();
        } else if($user->role == 'supervisor' && $user->jabatan == 'Kasi Pemberdayaan Masyarakat') {
            $data = DB::table('ref_jenis_surat_pelayanan')
            ->select('id_jenis_surat_pelayanan','nama_jenis_surat_pelayanan')
            ->whereIn('nama_jenis_surat_pelayanan',['Surat Pernyataan Ahli Waris','Surat Keterangan Cerai Ghaib'])
            ->get();
        } else {
            $data = DB::table('ref_jenis_surat_pelayanan')
            ->select('id_jenis_surat_pelayanan','nama_jenis_surat_pelayanan')
            ->whereIn('nama_jenis_surat_pelayanan',['Surat Pernyataan Ahli Waris','Surat Keterangan Cerai Ghaib','Surat Keterangan Pertanahan'])
            ->get();
        }

        return $data;
    }

    public function listJabatan() {
        return DB::table('ref_jabatan')->select('id_jabatan','nama_jabatan')->get();
    }

}
