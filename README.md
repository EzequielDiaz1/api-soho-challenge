#🧙🏻‍♂️

Crear archivo .env en la raíz del proyecto : 

PORT=3001
APP_ENV = develop
APP_PORT = 3000
DB_CONNECTION = mysql
DB_HOST = localhost
DB_PORT = 3306
DB_DATABASE = sohochallenge
DB_USERNAME = root
DB_PASSWORD = 1337
NODE_ENV=development

-------------------------------------------


# Crear base de datos local con nombre "sohochallenge"
# ejecutar el siguiente script:

!!

CREATE DATABASE IF NOT EXISTS sohochallenge;
USE sohochallenge;


CREATE TABLE `sohochallenge`.`projects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `siteImageUrl` VARCHAR(70) NOT NULL,
  `logoImageUrl` VARCHAR(70) NOT NULL,
  `tituloProyecto` VARCHAR(500) NOT NULL UNIQUE,
  `descripcion` VARCHAR(5000) NOT NULL,
  `tags` VARCHAR(500) NOT NULL,
  `backgroundColor` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

ALTER TABLE `sohochallenge`.`projects` AUTO_INCREMENT = 1;
INSERT INTO `sohochallenge`.`projects` (`siteImageUrl`, `logoImageUrl`, `tituloProyecto`, `descripcion`, `tags`, `backgroundColor`)
	VALUES ('https://i.ibb.co/J5YQ2Df/proyecto1.jpg', 'https://i.ibb.co/9h1bRwG/proyecto-1logo.png', 'Sitio publico y privado','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Ut morbi tincidunt augue interdum velit. Feugiat vivamus at augue eget arcu dictum varius duis at. Eget sit amet tellus cras adipiscing. Nisi quis eleifend quam adipiscing. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Elementum integer enim neque volutpat ac tincidunt vitae. Etiam','usabilidad,ui,ux,test con usuarios', 'rgb(34,59,130)');
INSERT INTO `sohochallenge`.`projects` (`siteImageUrl`, `logoImageUrl`, `tituloProyecto`, `descripcion`, `tags`, `backgroundColor`)
	VALUES ('https://i.ibb.co/NTRvxcH/proyecto2.png', 'https://i.ibb.co/7NSdrLk/proyecto2logo.png', 'Sitios web 2017','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Ut morbi tincidunt augue interdum velit. Feugiat vivamus at augue eget arcu dictum varius duis at. Eget sit amet tellus cras adipiscing. Nisi quis eleifend quam adipiscing. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Elementum integer enim neque volutpat ac tincidunt vitae. Etiam','responsive, ui, ux', 'rgb(201,44,58)');
INSERT INTO `sohochallenge`.`projects` (`siteImageUrl`, `logoImageUrl`, `tituloProyecto`, `descripcion`, `tags`, `backgroundColor`)
	VALUES ('https://i.ibb.co/m5pyJPG/proyecto3.png', 'https://i.ibb.co/KxGJL6k/proyecto3logo.png', 'TV App','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Ut morbi tincidunt augue interdum velit. Feugiat vivamus at augue eget arcu dictum varius duis at. Eget sit amet tellus cras adipiscing. Nisi quis eleifend quam adipiscing. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Elementum integer enim neque volutpat ac tincidunt vitae. Etiam','usabilidad,ui,ux,test con usuarios', 'rgb(255,255,255)');


!!


Una vez realizado esto, 

###npm run dev
