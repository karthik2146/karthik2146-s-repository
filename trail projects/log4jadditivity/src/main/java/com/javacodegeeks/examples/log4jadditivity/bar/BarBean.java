package com.javacodegeeks.examples.log4jadditivity.bar;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class BarBean {
	private static final Logger logger =  LogManager.getRootLogger();

	public void sayHello() {
		logger.info("Hello there from BarBean class!");

		logger.warn("Hello there from BarBean class!");
	}
}
