const scriptURL = 'https://script.google.com/macros/s/AKfycbwsi3eT0J3E2CGbRU58t-d41k_pQhZQF0LFVubUwk1PsZ9Hp5DthBD3z_oxy1Nah4Ee/exec'
const form = document.forms['test-form']

const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')

formTersedia = `<div class="mb-3">
<label class="form-label">bila tersedia, maka</label>
<input type="hidden" class="form-control" name="nama data" value="data lpk">
<input type="text" class="form-control" name="status data">
</div>
<button name="submit" type="submit" class="btn btn-primary btn-kirim">Submit</button>
<button class="btn btn-primary btn-loading d-none" type="button" disabled>
<span class="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
Loading...
</button>
`

formTakTersedia = `<div class="mb-3">
<label class="form-label">bila tidak tersedia, maka tolong jelaskan kenapa</label>
<input type="hidden" class="form-control" name="nama data" value="data lpk">
<input type="text" class="form-control" name="status data">
</div>
<button name="submit" type="submit" class="btn btn-primary btn-kirim">Submit</button>
<button class="btn btn-primary btn-loading d-none" type="button" disabled>
<span class="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
Loading...
</button>`

function tersedia() {
    document.querySelector('.panel').innerHTML = formTersedia
}

function taktersedia() {
    document.querySelector('.panel').innerHTML = formTakTersedia
}

form.addEventListener('submit', e => {
    e.preventDefault()

    // ketika tombol submit diklik
    // menampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none')
    btnKirim.classList.toggle('d-none')
    pilihanTersedia.classList.toggle('d-none')

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            console.log('Success!', response)
                // menampilkan tombol submit, hilangkan tombol loading
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
                // menampilkan alert sukses
            myAlert.classList.toggle('d-none')
                // reset input
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})