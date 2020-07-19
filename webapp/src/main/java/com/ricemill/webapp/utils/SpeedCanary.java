package com.ricemill.webapp.utils;

import org.slf4j.Logger;

public class SpeedCanary {

	private long startTime;
	private long endtime;
	private String methodName;
	private Logger logger;
	
	
	public SpeedCanary(Logger l, String methodName) {
		logger = l;
		this.methodName = methodName;
		startTime = System.currentTimeMillis();
	}
	

	public void done(){
		endtime = System.currentTimeMillis();
		long remain = endtime - startTime;
		logger.info("request for URL {} has taken {} milliseconds to complete",this.methodName,remain);
	}
	
	@Override
	public String toString() {
		
		StringBuilder strb = new StringBuilder();
		strb.append("starttime ").append(startTime).append(" endtime ").append( endtime);
		
		return strb.toString();
		
	}

	
	
}
