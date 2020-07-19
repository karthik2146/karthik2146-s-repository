package com.ricemill.webapp.action;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.opensymphony.xwork2.ActionSupport;


public class WelcomeAction extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	Logger logger = LoggerFactory.getLogger(WelcomeAction.class);
	
	private Sample sample = null;
	
	public String execute(){
	   
		logger.error("error in action");
		logger.debug("debug in action");
		logger.info("info in action");
	sample.toPrint();	
		
	logger.info(getText("welcome"));
	
	 return "success";  
   }

	public void setSample(Sample sample) {
		this.sample = sample;
	}
	
}
