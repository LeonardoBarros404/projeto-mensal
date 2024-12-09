/*const API_BASE_URL = "https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard";
const API_BOARD_URL = "https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard/Boards";

const dropdownButton = document.getElementById('dropdown-button');
const dropdownContent = document.getElementById('dropdown-content');
const columnContainer = document.getElementById('column-container'); // Certifique-se de que esse elemento exista
const tableList = document.getElementById("tableList"); // Certifique-se de que esse elemento exista

dropdownButton.addEventListener('click', async () => {
    const isVisible = dropdownContent.style.display;
    console.log('Dropdown visibility:', isVisible);
    dropdownContent.style.display = (isVisible === 'hidden' || isVisible === '') ? 'block' : 'hidden'; // Altere 'visible' para 'block'
    if (dropdownContent.style.display === 'block') {
        await populateDropdown(); // Carrega os boards ao abrir o dropdown
    }
});

window.addEventListener('click', (event) => {
    if (!event.target.closest('#dropdown-button') && !event.target.closest('#dropdown-content')) {
        dropdownContent.style.display = 'hidden';
    }
});

async function populateDropdown() {
    dropdownContent.innerHTML = ''; // Limpa o conteúdo antes de popular
    try {
        const response = await fetch(${API_BOARD_URL});
        if (!response.ok) {
            if (response.status === 422) {
                const errorData = await response.json();
                showError(errorData.Errors[0]);
            } else {
                showError("Aconteceu um erro inesperado, tente novamente.");
            }
            return;
        }

        const boards = await response.json();
        console.log("Boards recebidos:", boards); // Log para depuração

        boards.forEach((board) => {
            const linkItem = document.createElement('li');
            linkItem.innerHTML = <a href="#" id="${board.Id}">${board.Name}</a>;
            linkItem.addEventListener('click', (event) => {
                event.preventDefault(); // Previne o comportamento padrão do link
                console.log(`Board ID selecionado: ${board.Id}`); // Log para depuração
                buscarColunas(board.Id); // Passa o ID do board corretamente
            });
            dropdownContent.appendChild(linkItem);
        });
    } catch (error) {
        showError("Falha ao se conectar com o servidor. Tente novamente mais tarde");
    }
}

async function buscarColunas(idDoBoard) {
    console.log(Buscando colunas para BoardId: ${idDoBoard}); // Log para depuração
    try {
        const response = await fetch(https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard/ColumnByBoardId?BoardId=${idDoBoard});
        if (!response.ok) {
            console.error("Erro ao buscar colunas. Verifique sua API.");
            return;
        }

        const columns = await response.json();
        console.log("Colunas recebidas:", columns); // Log para depuração

        // Limpa o contêiner antes de adicionar novas colunas
        columnContainer.innerHTML = '';

        columns.forEach(column => {
            const columnElement = document.createElement('div');
            columnElement.className = 'column';
            columnElement.innerHTML = `
                <h3>${column.Name}</h3>
                <div class="tasks-container"></div>`;
            tableList.appendChild(columnElement);
            buscarTasks(column.Id); // Chama a função para buscar as tarefas
        });
    } catch (error) {
        console.error("Erro ao buscar colunas", error);
    }
}

function showError(message) {
    console.error(message);
}

// Lógica para alternar entre modos*/