/*
MySQL Backup
Source Server Version: 5.5.39
Source Database: helloworld
Date: 24.03.2015 14:31:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
--  Table structure for `hellotable`
-- ----------------------------
DROP TABLE IF EXISTS `hellotable`;
CREATE TABLE `hellotable` (
  `value` varchar(20) DEFAULT NULL,
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records 
-- ----------------------------
INSERT INTO `hellotable` VALUES ('Hello World Aleksey!','1');
