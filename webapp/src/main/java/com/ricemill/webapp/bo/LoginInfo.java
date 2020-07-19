package com.ricemill.webapp.bo;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;

@Entity
@Table(name = "pm_login_info")
public class LoginInfo implements Serializable{


	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "AADHAR_NUMBER")
	private long aadharNumber;
	
	@Column(name = "USERNAME")
	private String userName;
	
	@Column(name = "PASSWORD")
	private String password;
	
	@Column(name = "CRTD_DT")
	private Timestamp creditDate;
	
	@Column(name = "CRTD_BY")
	private String creditedBy;
	
	@Column(name = "CRTD_WRKSTN")
	private String creditedWorkStation;
	
	@Column(name = "MODFD_DT")
	private Timestamp modifiedDate;
	
	@Column(name = "MODFD_BY")
	private String modifiedBy;
	
	@Column(name = "MODFD_WRKSTN")
	private String modifiedWorkStation;

	public long getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(long aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Timestamp getCreditDate() {
		return creditDate;
	}

	public void setCreditDate(Timestamp creditDate) {
		this.creditDate = creditDate;
	}

	public String getCreditedBy() {
		return creditedBy;
	}

	public void setCreditedBy(String creditedBy) {
		this.creditedBy = creditedBy;
	}

	public String getCreditedWorkStation() {
		return creditedWorkStation;
	}

	public void setCreditedWorkStation(String creditedWorkStation) {
		this.creditedWorkStation = creditedWorkStation;
	}

	public Timestamp getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(Timestamp modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public String getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	public String getModifiedWorkStation() {
		return modifiedWorkStation;
	}

	public void setModifiedWorkStation(String modifiedWorkStation) {
		this.modifiedWorkStation = modifiedWorkStation;
	}
	
 	
	
	
}
