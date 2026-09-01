---
name: langgraph-investigation
description: "Stateful cyclic agent reasoning workflow powered by LangGraph StateGraph."
use_case: "Deep iterative hypothesis testing and evidence gathering loops for complex security incidents."
trigger_examples:
  - "Run LangGraph investigation on finding f-20260401-abc123"
  - "Execute LangGraph cyclic reasoning workflow"
objectives:
  - "Formulate attack hypothesis from anomaly telemetry"
  - "Iteratively query SIEM & EDR logs in stateful feedback loops"
  - "Compute confidence progression until high-certainty verdict is reached"
phases:
  - id: formulate_hypothesis
    agent: investigator
    name: "Formulate Hypothesis (LangGraph Node 1)"
    tools: [get_finding, list_findings]
    instructions: |
      Analyze telemetry, anomaly scores, and MITRE predictions. Formulate initial attack hypothesis.

  - id: gather_evidence_loop
    agent: investigator
    name: "Cyclic Evidence Gathering (LangGraph Node 2)"
    tools: [get_finding, nearest_neighbors, search_detections]
    instructions: |
      Query vector database for similar historical alerts. Accumulate evidence items.

  - id: evaluate_confidence
    agent: investigator
    name: "Evaluate Confidence (LangGraph Node 3)"
    tools: [get_case, update_case]
    instructions: |
      Compute confidence score. Loop back to gather_evidence if confidence < 85%, else route to verdict.

  - id: generate_verdict
    agent: responder
    name: "Generate Verdict & Remediation (LangGraph Node 4)"
    approval_required: true
    instructions: |
      Render final malicious/suspicious verdict and propose confidence-scored containment actions.
---

# LangGraph Cyclic Reasoning Workflow

An advanced multi-agent playbook utilizing LangGraph's `StateGraph` state machine for iterative hypothesis refinement and automated evidence accumulation.
