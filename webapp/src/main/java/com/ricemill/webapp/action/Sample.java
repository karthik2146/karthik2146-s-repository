package com.ricemill.webapp.action;

import java.sql.SQLException;

import org.hibernate.Session;

import com.ricemill.webapp.bo.LoginInfo;
import com.ricemill.webapp.db.session.ApplicationSessionManager;

public class Sample {
	public void toPrint(){
		System.out.println("sample class");
		
		try {
			Session session = ApplicationSessionManager.openSession();
			session.beginTransaction();
			
			LoginInfo l = new LoginInfo();
			l.setAadharNumber(434434l);
			l.setUserName("karthik");
			l.setPassword("password");
			//l.setCreditDate();
			
			session.save(l);
			session.getTransaction().commit();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
	}
}
