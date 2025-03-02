const dropArea = document.getElementById('drop-area');

        dropArea.addEventListener('dragover', (event) => {
            event.preventDefault();
            dropArea.style.borderColor = 'blue';
        });

        dropArea.addEventListener('dragleave', () => {
            dropArea.style.borderColor = '#ccc';
        });

        dropArea.addEventListener('drop', (event) => {
            event.preventDefault();
            dropArea.style.borderColor = '#ccc';

            const files = event.dataTransfer.files;
            for (const file of files) {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.classList.add('resized-image');
                        dropArea.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                }
            }
        });