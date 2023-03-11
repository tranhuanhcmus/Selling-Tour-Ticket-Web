var checkedseat = document.getElementsByClassName("checkedSeat");
checkedseat = [...checkedseat].map((i) => parseInt(i.innerText));

const seats = {};
for (let i = 1; i <= 20; i++) {
    checkedseat.map((seat) => {
        if (seat == i) {
            seats[i] = -1;
        }
    });
    if (seats[i] !== -1) {
        seats[i] = 0;
    }
}

const loadSeats = (seats) => {
    const sec = document.getElementsByClassName("seats-model");
    const arr1 = sec[1].querySelectorAll(".seat-icon");
    const arr0 = sec[0].querySelectorAll(".seat-icon");
    const blankSeats = [...arr0, ...arr1];

    blankSeats.map((seat) => {
        const position = seat.getAttribute("position");

        if (seats[position] == -1) seat.classList.toggle("seat-icon--checked");
        if (seats[position] != -1) {
            seat.addEventListener("click", () => {
                const isOn = seat.classList.toggle("seat-icon--select");

                const total = parseInt(document.getElementById("TOTAL").innerText);
                const price = parseInt(document.getElementById("price").innerText);
                document.getElementById("TOTAL").innerText =
                    total + (isOn ? 1 : -1) * price;
                if (isOn == 1) {
                    const pos = seat.getAttribute("position");
                    const text = document.getElementById("SEATS").innerText;
                    document.getElementById("SEATS").innerText = `${text} ${pos}`;
                }
            });
        }
    });
};
loadSeats(seats);

const testBtn = document.getElementById("SUBMIT");
testBtn.addEventListener("click", async(e) => {
    e.preventDefault();

    const form = document.getElementById("SubmitForm");

    var chk_status = form.checkValidity();

    form.reportValidity();

    if (chk_status) {
        const start = document.querySelector(
            'input[name="start-point"]:checked'
        ).value;
        const end = document.querySelector('input[name="end-point"]:checked').value;

        const name = document.querySelector('input[id="name"]').value;
        const tel = document.querySelector('input[id="tel"]').value;
        const email = document.querySelector('input[id="email"]').value;

        const price = document.getElementById("TOTAL").innerText;
        const id = document.getElementById("id").innerText;
        var seats = document.getElementById("SEATS").innerText.split(" ");
        if (seats[0] == "") seats.shift();

        // seats = seats.map((seat) => parseInt(seat));
        if (price == 0) {
            alert("Hãy chọn chỗ ngồi");
            return;
        }
        const result = { start, end, name, tel, email, price, seats, id };

        try {
            const response = await fetch(`http://localhost:3000/ticketinfo/`, {
                method: "POST",
                body: JSON.stringify(result),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                const data = await response.json();
                const idPhieuxe = data.phieuxe.id;

                window.location.replace(`/ticketinfo/${idPhieuxe}`);
            } else throw new Error("Error in response");
        } catch (error) {
            console.log("Error : ", error);
        }
    }
});