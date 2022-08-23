package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.excpetion.ResourceNotFoundException;
import com.example.demo.model.Candidate;
import com.example.demo.repository.CandidateRepository;

@RestController
@CrossOrigin("http://localhost:4200")
public class CandidateController {
	
	@Autowired
	private CandidateRepository candidateRespository;
	
	@GetMapping("/employees")
	public List<Candidate> getAll(){
		return candidateRespository.findAll();
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Candidate> getCandidateById(@PathVariable Long id){
		Candidate candidate = candidateRespository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Candidate not exist with id :"+id));
		return ResponseEntity.ok(candidate);
	}
	
	@PostMapping("/employees")
	public Candidate createCandidate(@RequestBody Candidate candidate) {
		return candidateRespository.save(candidate);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Candidate> updateCandidate(@PathVariable("id") Long id, @RequestBody Candidate CandidateDetails){
		Candidate candidate = candidateRespository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Candidate not exist with id :"+id));
		candidate.setName(CandidateDetails.getName());
		candidate.setContact(CandidateDetails.getContact());
		candidate.setBatch(CandidateDetails.getBatch());
		candidate.setCourse(CandidateDetails.getCourse());
		candidate.setDisability(CandidateDetails.getDisability());
		candidate.setYear(CandidateDetails.getYear());
		candidate.setWork(CandidateDetails.getWork());
		candidate.setWork(CandidateDetails.getCertificate());
		candidate.setWork(CandidateDetails.getSign());
		candidate.setSwot(CandidateDetails.getSwot());
	    final Candidate updatedCandidate = candidateRespository.save(candidate);
	    return ResponseEntity.ok(updatedCandidate);
	}
}
