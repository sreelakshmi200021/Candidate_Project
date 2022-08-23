package com.example.demo.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import ch.qos.logback.core.joran.spi.NoAutoStart;

@Entity

@Table(name="employees")
public class Candidate {
//	
//	public Candidate(String name, int contact, String batch, String course, String disability, String year, String work,
//			String swot) {
//		super();
//		this.name = name;
//		this.contact = contact;
//		this.batch = batch;
//		this.course = course;
//		this.disability = disability;
//		this.year = year;
//		this.work = work;
//		this.swot = swot;
//	}

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	

	private String name;
	

	private int contact;
	

	private String batch;
	
	private String course;
	

	private String disability;
	

	private String year;
	

	private String work;
	
	private String sign;
	
	private String certificate;
	
	private String swot;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setSign(String sign) {
		this.name = sign;
	}
	public String getSign() {
		return sign;
	}
	
	public String getCertificate() {
		return certificate;
	}

	public void setCertificate(String certificate) {
		this.name = certificate;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public int getContact() {
		return contact;
	}

	public void setContact(int contact) {
		this.contact = contact;
	}

	public String getBatch() {
		return batch;
	}

	public void setBatch(String batch) {
		this.batch = batch;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public String getDisability() {
		return disability;
	}

	public void setDisability(String disability) {
		this.disability = disability;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getWork() {
		return work;
	}

	public void setWork(String work) {
		this.work = work;
	}

	public String getSwot() {
		return swot;
	}

	public void setSwot(String swot) {
		this.swot = swot;
	}
	
	
}
