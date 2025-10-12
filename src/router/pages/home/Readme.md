    <div class="group" v-else>
      <article v-for="complex in objects" :key="complex.id">
        <header>
          <strong>
            {{ complex.name }}
            <small>{{ complex.houses.length }} объект(ов)</small>
          </strong>
        </header>

        <!-- <div v-for="house in complex.houses" :key="house.id" class="house">
          <h4>{{ house.name }}</h4>
          <img
            v-if="house.files[0]?.files.find((f) => f.is_title)"
            :src="house.files[0].files.find((f) => f.is_title)?.file_url"
            :alt="house.name"
          />
          <p>Этажей: {{ house.floors }} | Сдача: {{ house.inServiceDate }}</p>
        </div> -->
      </article>
    </div>
