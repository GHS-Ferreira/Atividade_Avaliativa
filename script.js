document.addEventListener("DOMContentLoaded", function() {
    const conceptSelect = document.getElementById("conceptSelect");
    const conceptDetails = document.getElementById("conceptDetails");
    let conceptsData; // Variável para armazenar os dados dos conceitos
  
    // Carrega os conceitos do arquivo JSON
    fetch("concepts.json")
      .then(response => response.json())
      .then(data => {
        conceptsData = data.concepts; // Armazena os dados dos conceitos na variável
        conceptsData.forEach(concept => {
          const option = document.createElement("option");
          option.value = concept.id;
          option.textContent = concept.title;
          conceptSelect.appendChild(option);
        });
      });
  
    // Exibe os detalhes do conceito selecionado quando o usuário muda a seleção
    conceptSelect.addEventListener("change", function() {
      const selectedConceptId = parseInt(conceptSelect.value);
      const selectedConcept = conceptsData.find(concept => concept.id === selectedConceptId);
      if (selectedConcept) {
        conceptDetails.innerHTML = `
          <h2>${selectedConcept.title}</h2>
          <p>${selectedConcept.description}</p>
        `;
      } else {
        conceptDetails.innerHTML = "<p>Selecione um conceito para ver os detalhes.</p>";
      }
    });
  });