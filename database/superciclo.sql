-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 05, 2013 at 10:44 PM
-- Server version: 5.5.9
-- PHP Version: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `superciclo`
--

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `cid` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `email` text NOT NULL,
  `endereco` text NOT NULL,
  `telefone` text NOT NULL,
  `foto` text NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` VALUES(0000000011, 'CenterClin', '', 'Rua Getulio Vargas', '(092) 2019-2019', '1366484576');
INSERT INTO `clientes` VALUES(0000000012, 'Amazon Med', '', 'Endereco', '(920) 1920-1920', '1367082150');
INSERT INTO `clientes` VALUES(0000000013, 'Cadastro', 'cadastro@cadastro.com', 'Endereco', '(901) 9202-1901', '');

-- --------------------------------------------------------

--
-- Table structure for table `empresa`
--

CREATE TABLE `empresa` (
  `eid` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `endereco` text NOT NULL,
  `telefone` text NOT NULL,
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `empresa`
--

INSERT INTO `empresa` VALUES(0000000002, 'Empresa 01', 'Local 01', '(198) 2918-2112');
INSERT INTO `empresa` VALUES(0000000003, 'Empresa 02', 'Local 02', '(121) 2121-2121');
INSERT INTO `empresa` VALUES(0000000004, 'Empresa 03', 'Local 03', '(121) 2121-2121');
INSERT INTO `empresa` VALUES(0000000005, 'Magistral', 'Endereço 01', '(092) 9819-2109');

-- --------------------------------------------------------

--
-- Table structure for table `encaminhamentos`
--

CREATE TABLE `encaminhamentos` (
  `eid` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `identificacao` enum('admissional','demissional','retornotrabalho','mudancafuncao','periodico','particular') NOT NULL,
  `nome` text NOT NULL,
  `celular` text NOT NULL,
  `empresa` text NOT NULL,
  `cargo` text NOT NULL,
  `data` text NOT NULL,
  `rg` text NOT NULL,
  `dt_nascimento` text NOT NULL,
  `aso` enum('true','false') NOT NULL,
  `audiometria` enum('true','false') NOT NULL,
  `hemograma` enum('true','false') NOT NULL,
  `eas` enum('true','false') NOT NULL,
  `epf` enum('true','false') NOT NULL,
  `vdrl` enum('true','false') NOT NULL,
  `glicose` enum('true','false') NOT NULL,
  `betahcg` enum('true','false') NOT NULL,
  `dosagem` enum('true','false') NOT NULL,
  `colesterol` enum('true','false') NOT NULL,
  `triglicerideos` enum('true','false') NOT NULL,
  `raiox` enum('true','false') NOT NULL,
  `vectoeletro` enum('true','false') NOT NULL,
  `tipagem` enum('true','false') NOT NULL,
  `tgo` enum('true','false') NOT NULL,
  `espirometria` enum('true','false') NOT NULL,
  `eletroencefalo` enum('true','false') NOT NULL,
  `eletrocardio` enum('true','false') NOT NULL,
  `status` enum('aberta','andamento','fechado') NOT NULL,
  `clinica` int(11) unsigned zerofill NOT NULL,
  `observacao` text NOT NULL,
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `encaminhamentos`
--

INSERT INTO `encaminhamentos` VALUES(0000000001, 'admissional', 'Nome', '(092) 8929-1291', 'Magistral', 'Cargo', '28/04/2013', '12121', '01/08/1988', 'true', 'false', 'false', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'fechado', 00000000011, '');
INSERT INTO `encaminhamentos` VALUES(0000000002, 'demissional', 'Nome', '(091) 2019-0192', 'Magistral', 'carggo', '28/04/2013', '12121212', '01/08/1988', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'true', 'false', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'aberta', 00000000011, '');
INSERT INTO `encaminhamentos` VALUES(0000000003, 'admissional', 'hjkjkh', '(902) 1092-0190', 'ConsultoriaSuperCiclo', 'hjkhkj', '90/21/0291', '201-92-019', '21/21/2122', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'aberta', 00000000013, 'Observacao de teste');
INSERT INTO `encaminhamentos` VALUES(0000000004, 'admissional', 'Outro Nome', '(291) 0201-9201', 'Magistral', 'jsjlkjwlkqj', '91/02/9102', '2910-2910-', '29/10/9201', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'andamento', 00000000013, 'Outra observacao');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `uid` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `email` text NOT NULL,
  `senha` text NOT NULL,
  `empresa` text NOT NULL,
  `tipo` enum('admin','usuario') NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` VALUES(0000000009, 'Italo', 'consultoriaocupacional2@gmail.com', '#123mudar', 'ConsultoriaSuperCiclo', 'admin');
INSERT INTO `usuarios` VALUES(0000000010, 'Paulo', 'paulo@magistral.com.br', '123456', 'Magistral', 'usuario');
