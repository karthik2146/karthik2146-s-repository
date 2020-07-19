package com.javacodegeeks.examples.log4additivity;



import com.javacodegeeks.examples.log4jadditivity.bar.BarBean;
import com.javacodegeeks.examples.log4jadditivity.foo.FooBean;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class App {

	private static final Logger logger = LogManager.getRootLogger();

	public static void main(String[] args) {
		FooBean fooBean = new FooBean();
		BarBean barBean = new BarBean();

		logger.debug("Hello there from App class!");

		fooBean.sayHello();
		barBean.sayHello();
	}
}
