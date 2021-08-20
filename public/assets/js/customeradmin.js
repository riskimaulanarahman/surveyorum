$(document).ready(function(){
    role = $('.roleuser').val();
    
    
    var store = new DevExpress.data.CustomStore({
        key: "id_cust",
        load: function() {
            return sendRequest(apiurl + "/customer");
        },
        insert: function(values) {
            return sendRequest(apiurl + "/customer", "POST", values);
        },
        update: function(key, values) {
            return sendRequest(apiurl + "/customer/"+key, "PUT", values);
        },
        remove: function(key) {
            return sendRequest(apiurl + "/customer/"+key, "DELETE");
        }
    });

    function moveEditColumnToLeft(dataGrid) {
		dataGrid.columnOption("command:edit", { 
			visibleIndex: -1,
			width: 80 
		});
    }
    
    var id = {},
        popup = null,
        popupOptions = {
            width: 500,
            height: 450,
            contentTemplate: function() {
                var scrollView = $("<div />").append(
                    $("<p>Title: <span>Foto Customer</span> | File: <span>"+title_fotocust+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotocustomer",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-cust",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto KTP</span> | File: <span>"+title_fotoktpcust+"</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotoktp",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-ktp",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto KTP Pasangan</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotoktppasangan",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-ktp-pasangan",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto KK</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotokk",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-kk",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto KTP Penjamin</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotoktppenjamin",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-ktp-penjamin",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Bukti Kerja</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotobuktikerja",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-bukti-kerja",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Rek Koran / Air / Listrik</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotorekkoran",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-rek-koran",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Rumah</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotorumah",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-rek-koran",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Lingkungan</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fotolingkungan",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-lingkungan",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    }),
                    $("<p>Title: <span>Foto Tambahan</span></p>"),
                    $("<div>").attr("id", "formupload").dxFileUploader({
                        uploadMode: "useButtons",
                        name: "fototambahan",
                        uploadUrl: "/api/upload-berkas/"+id+"/foto-tambahan",
                        accept: "image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        onUploaded: function (e) {						
                            dataGrid.refresh();
                        }
                    })
                );

                scrollView.dxScrollView({
                    width: '100%',
                    height: '100%'
                });
    

                return scrollView;
            },
            showTitle: true,
            title: "Upload Form",
            dragEnabled: false,
            closeOnOutsideClick: true
    };

    var showUpload = function(data,fotocust,fotoktpcust) {
        id = data;
        // if(fotocust !== null) {
            
        //     title = fotocust;
        // } else {
        //     title = "belum ada lampiran";
        // }

        (fotocust !== null) ? title_fotocust = fotocust : title_fotocust = "foto belum ada";
        (fotoktpcust !== null) ? title_fotoktpcust = fotoktpcust : title_fotoktpcust = "foto belum ada";

        console.log(id);

        if(popup) {
            popup.option("contentTemplate", popupOptions.contentTemplate.bind(this));
        } else {
            popup = $("#popup").dxPopup(popupOptions).dxPopup("instance");
        }

        popup.show();
    };
        ScPilihan = [{id:1,valpilihan:"Koperatif"},{id:2,valpilihan:"Kurang Koperatif"},{id:3,valpilihan:"Tidak Koperatif"}];
        ScKawin = [{id:1,valkawin:"Lajang"},{id:2,valkawin:"Kawin"},{id:3,valkawin:"Cerai Hidup"},{id:4,valkawin:"Cerai Mati"}];
        ScKeberadaan = [{id:1,valkeberadaan:"Dikenal"},{id:2,valkeberadaan:"Kurang Dikenal"},{id:3,valkeberadaan:"Tidak Dikenal"},{id:4,valkeberadaan:"Karakter Buruk"}];
        ScUnit = [{id:1,valunit:"Sendiri"},{id:2,valunit:"Keluarga"},{id:3,valunit:"Orang Lain"},{id:4,valunit:"Lain-lain"}];
        ScStatus = [{id:1,valstatus:"Belum Selesai"},{id:2,valstatus:"Sudah Selesai"}];
        var dataGrid = $("#grid-customer").dxDataGrid({     
            dataSource: store,
            allowColumnReordering: true,
            allowColumnResizing: true,
            columnsAutoWidth: true,
            columnMinWidth: 80,
            columnHidingEnabled: false,
            wordWrapEnabled: true,
            showBorders: true,
            filterRow: { visible: true },
            filterPanel: { visible: true },
            headerFilter: { visible: true },
            selection: {
                mode: "multiple"
            },
            columnFixing: { 
                enabled: true
            },
            editing: {
                useIcons:true,
                mode: "popup",
                allowAdding: (role == "marketing")?true:false,
                
                allowUpdating: (role=="admin" || role == "marketing")?true:false,
                allowDeleting: false
            },
            // scrolling: {
            //     mode: "infinite"
            // },
            pager: {
                allowedPageSizes: [5, 10, 15, 30],
                showInfo: true,
                showNavigationButtons: true,
                showPageSizeSelector: true,
                visible: true
            },
            paging: {
                pageSize: 5
            },
            columns: [
                // {
                //     caption: '#',formItem: {visible:false},width:40,
                //     fixed: false,
                //     cellTemplate:function(container,options) {
                //         container.text(options.rowIndex +1);
                //     }
                // },
                { 
                    caption: "Nama Customer",
                    dataField: "nama_cust",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },
                { 
                    caption: "Tempat Lahir Customer",
                    dataField: "tempat_lahir_cust",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Tanggal Lahir Customer",
                    dataField: "tgl_lahir_cust",
                    width: 150,
                    formItem: {visible:false},
                    dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nomor HP Customer",
                    dataField: "no_hp_cust",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Email Customer",
                    dataField: "email_cust",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nama Pasangan (Opsional)",
                    dataField: "nama_pasangan",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Tempat Lahir Pasangan (Opsional)",
                    dataField: "tempat_lahir_pasangan",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Tanggal Lahir Pasangan (Opsional)",
                    dataField: "tgl_lahir_pasangan",
                    width: 150,
                    formItem: {visible:false},
                    dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
                },{ 
                    caption: "Nomor HP Pasangan (Opsional)",
                    dataField: "no_hp_pasangan",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Email Pasangan (Opsional)",
                    dataField: "email_pasangan",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Lokasi (Ancar-ancar)",
                    dataField: "lokasi",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Bertemu Dengan",
                    dataField: "bertemu_dengan",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Pilihan Survey",
                    dataField: "pilihan_survey",
                    editorType: "dxSelectBox",
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                    editorOptions: {
                        dataSource: ScPilihan,  
                        valueExpr: 'valpilihan',
                        displayExpr: 'valpilihan',
                    },
                },{ 
                    caption: "Alamat Survey",
                    dataField: "alamat_survey",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Status Perkawinan",
                    dataField: "status_kawin",
                    formItem: {visible:false},
                    editorType: "dxSelectBox",
                    validationRules: [
                        { type: "required" }
                    ],
                    editorOptions: {
                        dataSource: ScKawin,  
                        valueExpr: 'valkawin',
                        displayExpr: 'valkawin',
                    },
                },{ 
                    caption: "Tanggungan (Jumlah Anak)",
                    dataField: "tanggungan",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Catatan Tanggungan",
                    dataField: "catatan_tanggungan",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nama Tempat Kerja/Usaha",
                    dataField: "tempat_kerja_cust",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Jabatan",
                    dataField: "jabatan_cust",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Alamat Tempat Kerja",
                    dataField: "alamat_kantor_cust",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Gaji",
                    dataField: "gaji_cust",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Pengeluaran",
                    dataField: "pengeluaran_cust",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Catatan Pekerjaan",
                    dataField: "catatan_pekerjaan_cust",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nama Tempat Kerja/Usaha Pasangan (Opsional)",
                    dataField: "tempat_kerja_pasangan",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Jabatan Pasangan (Opsional)",
                    dataField: "jabatan_pasangan",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Alamat Tempat Kerja Pasangan (Opsional)",
                    dataField: "alamat_kantor_pasangan",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Gaji Pasangan (Opsional)",
                    dataField: "gaji_pasangan",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Catatan Pekerjaan Pasangan (Opsional)",
                    dataField: "catatan_pekerjaan_pasangan",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Nama Penjamin (Opsional)",
                    dataField: "nama_penjamin",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Hubungan Penjamin (Opsional)",
                    dataField: "hubungan_penjamin",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Nomor HP Penjamin (Opsional)",
                    dataField: "no_hp_penjamin",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Catatan Penjamin (Opsional)",
                    dataField: "catatan_penjamin",
                    width: 150,
                    formItem: {visible:false},
                },{ 
                    caption: "Nama Ecall (Keluarga Tidak Serumah)",
                    dataField: "nama_ecall",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Hubungan Ecall",
                    dataField: "hubungan_ecall",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Alamat Ecall",
                    dataField: "alamat_ecall",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Nomor HP Ecall",
                    dataField: "no_hp_ecall",
                    dataType: "number",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Keberadaan",
                    dataField: "keberadaan_lingkungan",
                    formItem: {visible:false},
                    editorType: "dxSelectBox",
                    validationRules: [
                        { type: "required" }
                    ],
                    editorOptions: {
                        dataSource: ScKeberadaan,  
                        valueExpr: 'valkeberadaan',
                        displayExpr: 'valkeberadaan',
                    },
                },{ 
                    caption: "Catatan Lingkungan",
                    dataField: "catatan_lingkungan",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },{ 
                    caption: "Unit Untuk ...",
                    dataField: "unit_untuk",
                    formItem: {visible:false},
                    editorType: "dxSelectBox",
                    validationRules: [
                        { type: "required" }
                    ],
                    editorOptions: {
                        dataSource: ScUnit,  
                        valueExpr: 'valunit',
                        displayExpr: 'valunit',
                    },
                },{ 
                    caption: "Catatan Unit",
                    dataField: "catatan_unit",
                    width: 150,
                    formItem: {visible:false},
                    validationRules: [
                        { type: "required" }
                    ],
                },
                { 
                    caption: "Foto Customer",
                    dataField: "foto_cust",
                    width: 150,
                    formItem: {visible:false},
                    fixed: true,
                    fixedPosition: "right",
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                        $('<a href="/upload/'+options.data.foto_cust+'" target="_blank">'+options.data.foto_cust+'</a>').addClass('dx-link').appendTo(container);
                        
                    }
                },
                { 
                    caption: "Nama Field Verifier",
                    visible: (role=="admin" || role == "marketing")?true:false,
                    fixed: true,
                    fixedPosition: "right",
                    dataField: "id_fv",
                    formItem: {visible:false},
                    width: 150,
                },{ 
                    caption: "Status",
                    dataField: "status",
                    fixed: true,
                    fixedPosition: "right",
                    formItem: {visible:true},
                    width: 150,
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: ScStatus,  
                        valueExpr: 'valstatus',
                        displayExpr: 'valstatus',
                    },
                },
                
                {
                    caption: 'Tambah/Edit Berkas',
                    formItem: {visible:false},
                    fixed: true,
                    fixedPosition: "right",
                    visible: (role=="admin" || role == "marketing")?true:false,
                    editorOptions: {
                        disabled: true
                    },
                    cellTemplate: function(container, options) {
            
                    $('<button class="btn btn-danger btn-xs">Upload</button>').addClass('dx-button').on('dxclick', function(evt) {
                        evt.stopPropagation();
                        if(role=="fv") {
                            showUpload(
                                options.data.id_cust,
                                options.data.foto_cust,
                                options.data.foto_ktp_cust
                                );
                        }else {
                            DevExpress.ui.notify("Aksi Tidak Di Izinkan", "error", 5000);
                        }
                    }).appendTo(container);
                    
                    }
                },
                
                // { 
                //     caption: "creator",
                //     visible: (role=="admin")?true:false,
                //     dataField: "users.nama_lengkap",
                //     formItem: {visible:false},
                //     fixed: false,
                //     width: 150,
                // },
                
            ],
            export: {
                enabled: true,
                fileName: "surat-masuk",
                excelFilterEnabled: true,
                allowExportSelectedData: true
            },
            onContentReady: function(e){
                moveEditColumnToLeft(e.component);
            },
            onToolbarPreparing: function(e) {
                dataGrid = e.component;
        
                e.toolbarOptions.items.unshift({						
                    location: "after",
                    widget: "dxButton",
                    options: {
                        hint: "Refresh Data",
                        icon: "refresh",
                        onClick: function() {
                            dataGrid.refresh();
                        }
                    }
                },
                )
            },
            onSelectionChanged: function(data) {
                deleteButton.option("disabled", !data.selectedRowsData.length);
                // selectedItems = data.selectedRowsData;
                // disabled = !selectedItems.length;
            }, 
        }).dxDataGrid("instance");

    var deleteButton = $("#gridDeleteSelected").dxButton({
        text: "Delete Selected Records",
        height: 34,
        disabled: true,
        onClick: function () {
            var result = DevExpress.ui.dialog.confirm("Are you sure you want to delete selected?", "Delete row");
            result.done(function (dialogResult) {
                if (dialogResult){
                    $.each(dataGrid.getSelectedRowKeys(), function() {
                        store.remove(this);
                    });
                    dataGrid.refresh();
                }
            });
            
        }
    }).dxButton("instance");


});
