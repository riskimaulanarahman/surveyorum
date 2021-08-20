-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 20, 2021 at 08:12 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `surveyor`
--

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('RYFFqVVxu1tZKWpvZmVbSq1SG3cUe6r36JJ5bBRB', 19, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiaHJSVnE4Wlg1VEV4NGM2eUxZbU1sbG1nSlpQd21aY0dxRjI4cWdOdiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjIxOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxOTt9', 1629483000),
('sQEQM52cFr3IYuFgauxKcahYA9ig855U20Vx5QtF', 1, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoicFlibGM3azFKRUV4cHFHQzUzRk1ScTZPaFhudnlFbDdYWHZEMFRSdyI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjIxOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1629482018),
('xd6TkOF25qppgV5Itm7L37gnuma9fCwEUdtgaw8w', 21, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiNE15VjE3MmFyZnRST1JHTlJRNE12Nmd5dDdnV3M3cnNuSXBRMEdRTCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjIxOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToyMTt9', 1629482228);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cust`
--

CREATE TABLE `tbl_cust` (
  `id_cust` int(11) NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `nama_cust` varchar(100) DEFAULT NULL,
  `tempat_lahir_cust` varchar(100) DEFAULT NULL,
  `tgl_lahir_cust` date DEFAULT NULL,
  `no_hp_cust` varchar(100) DEFAULT NULL,
  `email_cust` varchar(100) DEFAULT NULL,
  `nama_pasangan` varchar(100) DEFAULT NULL,
  `tempat_lahir_pasangan` varchar(100) DEFAULT NULL,
  `tgl_lahir_pasangan` date DEFAULT NULL,
  `no_hp_pasangan` varchar(100) DEFAULT NULL,
  `email_pasangan` varchar(100) DEFAULT NULL,
  `lokasi` varchar(100) DEFAULT NULL,
  `bertemu_dengan` varchar(100) DEFAULT NULL,
  `pilihan_survey` varchar(100) DEFAULT NULL,
  `alamat_survey` varchar(100) DEFAULT NULL,
  `status_kawin` varchar(100) DEFAULT NULL,
  `tanggungan` varchar(100) DEFAULT NULL,
  `catatan_tanggungan` varchar(100) DEFAULT NULL,
  `tempat_kerja_cust` varchar(100) DEFAULT NULL,
  `jabatan_cust` varchar(100) DEFAULT NULL,
  `alamat_kantor_cust` varchar(100) DEFAULT NULL,
  `gaji_cust` varchar(100) DEFAULT NULL,
  `pengeluaran_cust` varchar(100) DEFAULT NULL,
  `catatan_pekerjaan_cust` varchar(100) DEFAULT NULL,
  `tempat_kerja_pasangan` varchar(100) DEFAULT NULL,
  `jabatan_pasangan` varchar(100) DEFAULT NULL,
  `alamat_kantor_pasangan` varchar(100) DEFAULT NULL,
  `gaji_pasangan` varchar(100) DEFAULT NULL,
  `catatan_pekerjaan_pasangan` varchar(100) DEFAULT NULL,
  `nama_penjamin` varchar(100) DEFAULT NULL,
  `hubungan_penjamin` varchar(100) DEFAULT NULL,
  `no_hp_penjamin` varchar(100) DEFAULT NULL,
  `catatan_penjamin` varchar(100) DEFAULT NULL,
  `nama_ecall` varchar(100) DEFAULT NULL,
  `hubungan_ecall` varchar(100) DEFAULT NULL,
  `alamat_ecall` varchar(100) DEFAULT NULL,
  `no_hp_ecall` varchar(100) DEFAULT NULL,
  `keberadaan_lingkungan` varchar(100) DEFAULT NULL,
  `catatan_lingkungan` varchar(100) DEFAULT NULL,
  `unit_untuk` varchar(100) DEFAULT NULL,
  `catatan_unit` varchar(100) DEFAULT NULL,
  `foto_cust` varchar(100) DEFAULT NULL,
  `foto_ktp_cust` varchar(100) DEFAULT NULL,
  `foto_ktp_pasangan` varchar(100) DEFAULT NULL,
  `foto_kk_cust` varchar(100) DEFAULT NULL,
  `foto_ktp_penjamin` varchar(100) DEFAULT NULL,
  `foto_bukti_kerja_cust` varchar(100) DEFAULT NULL,
  `foto_rek_koran` varchar(100) DEFAULT NULL,
  `foto_rumah_cust` varchar(100) DEFAULT NULL,
  `foto_lingkungan` varchar(100) DEFAULT NULL,
  `foto_tambahan` varchar(100) DEFAULT NULL,
  `id_fv` int(10) UNSIGNED DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cust`
--

INSERT INTO `tbl_cust` (`id_cust`, `id_user`, `nama_cust`, `tempat_lahir_cust`, `tgl_lahir_cust`, `no_hp_cust`, `email_cust`, `nama_pasangan`, `tempat_lahir_pasangan`, `tgl_lahir_pasangan`, `no_hp_pasangan`, `email_pasangan`, `lokasi`, `bertemu_dengan`, `pilihan_survey`, `alamat_survey`, `status_kawin`, `tanggungan`, `catatan_tanggungan`, `tempat_kerja_cust`, `jabatan_cust`, `alamat_kantor_cust`, `gaji_cust`, `pengeluaran_cust`, `catatan_pekerjaan_cust`, `tempat_kerja_pasangan`, `jabatan_pasangan`, `alamat_kantor_pasangan`, `gaji_pasangan`, `catatan_pekerjaan_pasangan`, `nama_penjamin`, `hubungan_penjamin`, `no_hp_penjamin`, `catatan_penjamin`, `nama_ecall`, `hubungan_ecall`, `alamat_ecall`, `no_hp_ecall`, `keberadaan_lingkungan`, `catatan_lingkungan`, `unit_untuk`, `catatan_unit`, `foto_cust`, `foto_ktp_cust`, `foto_ktp_pasangan`, `foto_kk_cust`, `foto_ktp_penjamin`, `foto_bukti_kerja_cust`, `foto_rek_koran`, `foto_rumah_cust`, `foto_lingkungan`, `foto_tambahan`, `id_fv`, `status`, `created_at`, `updated_at`) VALUES
(17, 19, 'nama edit by fv', 'gewgewgew', '2021-08-19', '5326262', 'sdgsgr', NULL, NULL, NULL, NULL, NULL, 'gfehrehgre', 'fgrehertbnre', 'Koperatif', 'ebrebre', 'Lajang', '214', 'gewgergre', 'fgwgweg', 'gwgewg', 'thtrjege', '646432', '6874', 'dfghtetrhrt', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'fjthjt', 'jtyjtyjyt', 'jjtyjytjyt', '6865865', 'Dikenal', 'htyjytjty', 'Sendiri', 'jtkyukuy', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 21, 'Belum Selesai', '2021-08-20 09:31:49', '2021-08-20 09:57:08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) UNSIGNED NOT NULL,
  `npo` int(11) DEFAULT NULL,
  `nama_lengkap` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `npo`, `nama_lengkap`, `email`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 111220895, 'admin', 'admin@mail.com', '$2y$10$/DoA5h9Ycf.Fqt.AkRmtOe0Q49wQ2BbDGf4lMEooz/FL/Px9brYiy', 'admin', NULL, '2021-08-08 22:30:42', '2021-08-20 05:51:07'),
(19, 111908776, 'nia', 'nia@mail.com', '$2y$10$ZiPhNavcwBiOCx0PNdeAeeo1ZtB5FlV4vP2FFFRYKuU.mTwuMU0q.', 'marketing', NULL, '2021-08-20 05:51:41', '2021-08-20 05:51:52'),
(21, 111789087, 'bayu', 'bayu@mail.com', '$2y$10$xBO9zKbQOm8ezCecEo5w8eEVx3p6dXc73VvjoesbaO.bZBXWLP3S2', 'fv', NULL, '2021-08-20 05:56:10', '2021-08-20 05:56:10'),
(22, 111976573, 'kira', 'kira@mail.com', '$2y$10$4ZskGwnodKv7ah.2CZCNCucrR.RoyvKwR9a1ifD2E/KQJq2UlVP1C', 'marketing', NULL, '2021-08-20 09:29:22', '2021-08-20 09:29:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `tbl_cust`
--
ALTER TABLE `tbl_cust`
  ADD PRIMARY KEY (`id_cust`),
  ADD KEY `fvusers` (`id_fv`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `users_email_unique` (`email`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_cust`
--
ALTER TABLE `tbl_cust`
  MODIFY `id_cust` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
