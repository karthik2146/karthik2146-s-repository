package com.javacodegeeks.examples.log4jadditivity.foo;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class FooBean {
	private static final Logger logger =  LogManager.getRootLogger();
	public void sayHello() {
		logger.debug("Hello there from FooBean class!");
		
		logger.info("Hello there from FooBean class!");
	}
}
