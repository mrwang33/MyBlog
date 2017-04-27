/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50544
Source Host           : localhost:3306
Source Database       : myblog

Target Server Type    : MYSQL
Target Server Version : 50544
File Encoding         : 65001

Date: 2017-04-24 23:31:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `article`
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `article_title` varchar(100) NOT NULL COMMENT '文章标题',
  `article_id` int(11) NOT NULL,
  `article_date` datetime NOT NULL COMMENT '发表时间',
  `article_keywords` varchar(50) DEFAULT NULL,
  `article_views` int(11) DEFAULT NULL COMMENT '浏览次数',
  `article_stars` int(11) DEFAULT NULL COMMENT '博客点赞数',
  `article_content` longtext COMMENT '博客内容',
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'wang', 'wang');
