/*******************************************************************************
 * Symantec Watermark: CB70-0400-9993-66-15-1
 ******************************************************************************/

package com.ricemill.webapp.db.session;

import java.sql.Connection;
import java.sql.SQLException;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ricemill.webapp.bo.LoginInfo;

public class ApplicationSessionManager 
{
	private static final Logger logger = LoggerFactory.getLogger(ApplicationSessionManager.class);
	
	
	private static final SessionFactory sessionFactory = buildSessionFactory();
	private static ServiceRegistry serviceRegistry;
	private static Configuration sessionConfiguration;

	private static SessionFactory buildSessionFactory()
	{
		try {
			sessionConfiguration = new Configuration()
				.addAnnotatedClass(LoginInfo.class)
				.configure();
			serviceRegistry = new ServiceRegistryBuilder().applySettings(sessionConfiguration.getProperties()).buildServiceRegistry();  
			return sessionConfiguration.buildSessionFactory(serviceRegistry);
		} catch(Throwable exp) {
			logger.error(exp.toString(), exp);
		}
		return null;
	}
	

	public static Session openSession()throws SQLException{
		return sessionFactory.openSession();
	}
	
	public void shutdown() {
		if (ApplicationSessionManager.sessionFactory != null && !ApplicationSessionManager.sessionFactory.isClosed()) {
			ApplicationSessionManager.sessionFactory.close();
		}
	}
	
	public void closeSession(Session session) throws SQLException {
		if (session == null) {
			return;
		}

		Connection connection = session.close();
		if (connection != null) {
			connection.close();
		}
	}
	
	
	
}
