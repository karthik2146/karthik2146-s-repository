package com.ricemill.webapp.filter;

import java.io.IOException;
import java.util.Date;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ricemill.webapp.utils.SpeedCanary;

public class StatsFilter implements Filter {

	Logger l = LoggerFactory.getLogger(StatsFilter.class);
	
	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void doFilter(ServletRequest req, ServletResponse resp,
			FilterChain chain) throws IOException, ServletException {
		
		HttpServletRequest request = (HttpServletRequest) req;
		
		String path = request.getServletPath();
		
		SpeedCanary speed = new SpeedCanary(l, path);

		HttpSession s = request.getSession();
		
		s.setAttribute("time", new Date());
		chain.doFilter(req, resp);

		speed.done();
	}
	
	@Override
	public void destroy() {
		
		
	}
}
