
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `EScms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(9) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdby` int(9) NOT NULL DEFAULT '0',
  `adminname` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL,
  `password_token` varchar(500) NOT NULL,
  `token_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `admin_ip` varchar(255) NOT NULL,
  `mydp` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--
/*
INSERT INTO `admin` (`admin_id`, `status`, `full_name`, `email`, `date_time`, `createdby`, `adminname`, `password`, `password_token`, `token_time`, `admin_ip`, `mydp`) VALUES
(1, 1, '', '', '2018-09-04 08:05:26', 0, 'parag', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', ''),
(2, 0, 'paragdineshgupta', '', '2018-09-21 06:54:36', 0, 'gupta', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', 'parag.jpg'),
(3, 1, 'parag', '', '2018-09-22 10:00:13', 2, 'divana', '85b2ab7fc2fa0ab39c66c05eadffbad5cd3d47a6cdc761ad41b7cb84b9a4b251', '', '0000-00-00 00:00:00', '', ''),
(4, 1, 'rajesh', '', '2018-10-02 10:13:57', 1, 'raj', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', '');
*/
-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blog_id` int(11) NOT NULL,
  `b_position` int(1) DEFAULT NULL COMMENT '0-top 1-side',
  `b_name` varchar(255) NOT NULL,
  `b_desc` text NOT NULL,
  `b_image1` varchar(255) NOT NULL,
  `b_image2` varchar(255) NOT NULL,
  `b_image3` varchar(255) NOT NULL,
  `b_image4` varchar(255) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `blog`
--
/*
INSERT INTO `blog` (`blog_id`, `b_position`, `b_name`, `b_desc`, `b_image1`, `b_image2`, `b_image3`, `b_image4`, `status`) VALUES
(1, 1, 'test blog', 'uuuuuuuuuuuuuuuuuuuuuuuu', 'aa', 'bbbb', 'bb', 'aaa', 1),
(2, NULL, 'customtitle', 'custom description', 'C:\\fakepath\\bloghead.jpg', 'C:\\fakepath\\post3.jpg', '', '', 1);
*/
-- --------------------------------------------------------

--
-- Table structure for table `career`
--

CREATE TABLE `career` (
  `career_id` int(11) NOT NULL,
  `profile` varchar(255) NOT NULL,
  `c_first_name` varchar(255) DEFAULT NULL,
  `c_last_name` varchar(255) DEFAULT NULL,
  `c_contact_number` varchar(255) DEFAULT NULL,
  `c_email` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `createdby` int(11) NOT NULL,
  `career_status` int(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `career`
--

INSERT INTO `career` (`career_id`, `profile`, `c_first_name`, `c_last_name`, `c_contact_number`, `c_email`, `description`, `createdby`, `career_status`) VALUES
(1, '1', 'parag', 'gupta', '8764048596', 'paraggupta33@gmail.com', '', 0, 1),
(2, '3', 'aakash', 'paliwal', '8765059856', 'aakashpaliwal77@gmail.com', '', 0, 1),
(3, '3', 'john ', 'doe', '9460158333', 'johndoe33@gmail.com', '', 0, 1),
(4, 'Full Stack Developer', 'jane', 'doe', '1234567897', 'janedoe44@gmail.com', '', 0, 1),
(5, 'BackEnd Developer', 'johnjohn', 'doe', '9413105206', 'johnfr@gmail.com', '', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `contact_us_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `msg` text,
  `email` varchar(100) DEFAULT NULL,
  `mobile` varchar(13) DEFAULT NULL,
  `dummy1` varchar(50) DEFAULT NULL,
  `dummy2` varchar(50) DEFAULT NULL,
  `dummy3` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_us`
--
/*
INSERT INTO `contact_us` (`contact_us_id`, `name`, `msg`, `email`, `mobile`, `dummy1`, `dummy2`, `dummy3`) VALUES
(1, NULL, NULL, 'guptaparag1996@gmail.com', NULL, NULL, NULL, NULL),
(2, NULL, NULL, 'parag@equipshare.in', NULL, NULL, NULL, NULL),
(3, NULL, NULL, 'guptaparag1996@gmail.com', NULL, NULL, NULL, NULL),
(4, NULL, NULL, 'guptaparag1996@gmail.com', NULL, NULL, NULL, NULL),
(5, NULL, '       /guptaparag1996@gmail.com  /n   a     ', 'parag@gmail.com', NULL, NULL, NULL, NULL),
(6, NULL, '\'<script>hello</script> world\'', 'parag@gmail.com', NULL, NULL, NULL, NULL),
(7, NULL, '<script>hello</script> world', 'parag@gmail.com', NULL, NULL, NULL, NULL);
*/
-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `enquiry_id` int(11) NOT NULL,
  `custtype` varchar(25) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_num` int(11) NOT NULL,
  `description` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '0 for delete'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry`
--
/*
INSERT INTO `enquiry` (`enquiry_id`, `name`, `subject`, `description`, `status`) VALUES
(1, 'rajesh', 'jalebi kya bhav he', 'timepass', 0);
*/
-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE `equipment` (
  `equipment_id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `subcategory` varchar(255) NOT NULL,
  `machinesname` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `rate` varchar(10) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `equipment`
--
/*
INSERT INTO `equipment` (`equipment_id`, `name`, `description`, `rate`, `status`) VALUES
(1, 'testequip', 'timepass', '10000', 1);
*/
-- --------------------------------------------------------

--
-- Table structure for table `subscriber`
--

CREATE TABLE `subscriber` (
  `subscriber_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `solutions`
--

CREATE TABLE `solutions` (
  `solution_id` int(11) NOT NULL,
  `s_image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------


--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD KEY `admin_fk0` (`createdby`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `career`
--
ALTER TABLE `career`
  ADD PRIMARY KEY (`career_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`contact_us_id`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`enquiry_id`);

--
-- Indexes for table `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`equipment_id`);

--
-- Indexes for table `subscriber`
--
ALTER TABLE `subscriber`
  ADD PRIMARY KEY (`subscriber_id`);

--
-- Indexes for table `solutions`
--
ALTER TABLE `solutions`
  ADD PRIMARY KEY (`solution_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `career`
--
ALTER TABLE `career`
  MODIFY `career_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `contact_us_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `enquiry_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `equipment`
--
ALTER TABLE `equipment`
  MODIFY `equipment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `subscriber`
--
ALTER TABLE `subscriber`
  MODIFY `subscriber_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `solutions`
--
ALTER TABLE `solutions`
  MODIFY `solution_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
