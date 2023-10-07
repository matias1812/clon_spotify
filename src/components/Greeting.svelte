<script lang="ts">
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  let greeting = ""

  if (currentHour < 5) {
    greeting = "Buenos días 🌤️"
  } else if (currentHour < 22) {
    greeting = "Buenas tardes 🌄"
  } else {
    greeting = "Buenas noches 🌙"
  }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1> 