// Funzione per mostrare il nome salvato
function mostraNomeSalvato() {
  const nome = localStorage.getItem("nomeUtente")
  const savedNameDiv = document.getElementById("savedName")
  if (nome) {
    savedNameDiv.textContent = `Nome salvato: ${nome}`
  } else {
    savedNameDiv.textContent = "Nessun nome salvato."
  }
}

// All'avvio mostra il nome salvato
mostraNomeSalvato()

// Salva il nome in localStorage tramite submit del form
document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault()
  const nome = document.getElementById("nameInput").value.trim()
  if (nome) {
    localStorage.setItem("nomeUtente", nome)
    mostraNomeSalvato()
  }
})

// Rimuovi il nome da localStorage
document.getElementById("removeBtn").addEventListener("click", function () {
  localStorage.removeItem("nomeUtente")
  mostraNomeSalvato()
})
