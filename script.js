const inputs = document.querySelectorAll('.controls input');

function hnadleUpdate() {
    // console.log(this.dataset);
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    
}

inputs.forEach(input => input.addEventListener('change', hnadleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', hnadleUpdate));