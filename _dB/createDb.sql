-- --------------------------------------------------------
-- Hôte :                        localhost
-- Version du serveur:           5.1.72-community - MySQL Community Server (GPL)
-- SE du serveur:                Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

-- Export de la structure de la base pour schedule
CREATE DATABASE IF NOT EXISTS `schedule` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `schedule`;

-- Export de la structure de la table schedule. days
CREATE TABLE IF NOT EXISTS `days` (
  `id_days` int(11) NOT NULL AUTO_INCREMENT,
  `name_days` varchar(50) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id_days`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Export de données de la table schedule.days : ~7 rows (environ)
/*!40000 ALTER TABLE `days` DISABLE KEYS */;
INSERT INTO `days` (`id_days`, `name_days`) VALUES
	(1, 'Sun'),
	(2, 'Mon'),
	(3, 'Tue'),
	(4, 'Wed'),
	(5, 'Thu'),
	(6, 'Fri'),
	(7, 'Sat');

-- Export de la structure de la table schedule. workhours
CREATE TABLE IF NOT EXISTS `workhours` (
  `id_workhours` int(11) NOT NULL AUTO_INCREMENT,
  `idx_days` int(11) NOT NULL,
  `start_workhours` time DEFAULT NULL,
  `end_workhours` time DEFAULT NULL,
  PRIMARY KEY (`id_workhours`),
  KEY `FK__days` (`idx_days`),
  CONSTRAINT `FK__days` FOREIGN KEY (`idx_days`) REFERENCES `days` (`id_days`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- Export de données de la table schedule.workhours : ~9 rows (environ)
INSERT INTO `workhours` (`id_workhours`, `idx_days`, `start_workhours`, `end_workhours`) VALUES
	(1, 1, NULL, NULL),
	(2, 2, '08:00:00', '16:00:00'),
	(3, 3, '08:00:00', '12:00:00'),
	(4, 3, '14:00:00', '18:00:00'),
	(5, 4, '08:00:00', '16:00:00'),
	(6, 5, '08:00:00', '12:00:00'),
	(7, 5, '14:00:00', '18:00:00'),
	(8, 6, '08:00:00', '18:00:00'),
	(9, 7, '08:00:00', '12:00:00');