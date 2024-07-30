-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2024 at 04:26 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `overseas_shopping_assistance_platform`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(10) NOT NULL,
  `productName` varchar(100) NOT NULL,
  `tracking_number` int(10) NOT NULL,
  `website_url` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderID`, `productName`, `tracking_number`, `website_url`, `image`) VALUES
(1, 'Lip Balm', 7712345, 'https://shopee.sg/INNISFREE-Dewy-Tint-Lip-Balm-i.71756544.18226405825?sp_atk=353b5b86-f5dc-4f30-b14d-4c34801a6594&xptdk=353b5b86-f5dc-4f30-b14d-4c34801a6594', 'lipbalm.png'),
(2, 'Tea Drink', 7765432, 'https://shopee.sg/Chi-Forest-%E5%85%83%E6%B0%94%E6%A3%AE%E6%9E%97-RanTea-Oolong-Tea-Herbal-Tea-%E7%87%83%E8%8C%B6%E4%B9%8C%E9%BE%99%E8%8C%B6-Zero-Sugar-Free-Drinks-12-Flavors-%E8%8D%89%E6%9C%AC%E6%A4%8D%E7%89%A9%E8%8C%B6-15-bottles-Genki-Forest--i.500126434.18790430583?sp_atk=ac664c2a-014b-449c-86b5-fad5ee0b985f&xptdk=ac664c2a-014b-449c-86b5-fad5ee0b985f', 'teadrink.png'),
(3, 'Chocolate', 7723456, 'https://shopee.sg/Nestle-Japan-KitKat-Mini-Assorted-i.745640675.18558885557?sp_atk=d4be38ea-8b86-44d8-a389-da40f2ede339&xptdk=d4be38ea-8b86-44d8-a389-da40f2ede339', 'chocolate.png'),
(6, 'Detergent', 7790123, 'https://shopee.sg/ORITA-Eco-Friendly-Coconut-Soap-Base-Baking-Soda-Laundry-Detergent-Rose-Scented-1.5L-x-6s-(per-carton)-i.195238920.11566923541?sp_atk=369bd7a7-22cf-40fd-bf2e-58f7af68d81a&xptdk=369bd7a7-22cf-40fd-bf2e-58f7af68d81a', 'detergent.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
