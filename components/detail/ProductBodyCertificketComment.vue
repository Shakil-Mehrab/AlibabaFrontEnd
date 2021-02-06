<template>
  <fragment>
    <div>
      <ul class="flex">
        <li
          class="px-4 py-1 mr-2 text-center border border-customcolor-300"
          :class="{
            'bg-customcolor-300 text-white': option == 'description'
          }"
          @click.prevent="ShowOption('description')"
        >
          <a href="">Description</a>
        </li>
        <li
          class="px-4 py-1 mr-2 text-center border border-customcolor-300"
          :class="{
            'bg-customcolor-300 text-white': option == 'comment'
          }"
          @click.prevent="ShowOption('comment')"
        >
          <a href="">Comment</a>
        </li>
        <li
          class="px-4 py-1 mr-2 text-center border border-customcolor-300"
          :class="{
            'bg-customcolor-300 text-white': option == 'certificket'
          }"
          @click.prevent="ShowOption('certificket')"
        >
          <a href="">Certificket</a>
        </li>
      </ul>
    </div>
    <div v-if="option == 'description'" class="mt-5">
      <table border="1px solid black">
        <thead>
          <tr>
            <th class="border">
              <h1 class="p-2">Description</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border">
              <p class="p-2 text-customcolor-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                labore, iusto, corrupti iure beatae ut vero excepturi sapiente,
                voluptate qui officia cumque amet esse recusandae? Eius amet
                delectus aspernatur perspiciatis?
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="option == 'comment'" class="mt-5">
      <div class="py-2 text-xl font-bold">
        Leave a Commnet
      </div>
      <div>
        <label for="" class="text-base">Rating</label>
        <div>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
      </div>
      <div>
        <label for="" class="text-base">Comment</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          class="w-full focus:outline-none p-2 border border-gray-400 focus:border-customcolor-300"
          placeholder="Type Your Comment Here"
        ></textarea>
      </div>
      <div class="border p-2">
        <ul>
          <li>
            <a href="">
              <img
                src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
                class="w-12 rounded-full inline-block"
                alt=""
              />
              <span class="text-base font-bold">Shakil Sarder</span>
            </a>
            <p class="ml-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              earum ipsum officiis voluptas architecto, modi quaerat eos sed
              quos dignissimos dolorem delectus ad dolores, repellendus eaque
              aliquid harum molestiae cumque
            </p>
            <ul class="ml-12 mt-2">
              <li>
                <a href="">
                  <img
                    src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
                    class="w-12 rounded-full inline-block"
                    alt=""
                  />
                  <span class="text-base font-bold">Shakil Sarder</span>
                </a>
                <p class="ml-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam earum ipsum officiis voluptas architecto, modi quaerat
                  eos sed quos dignissimos dolorem delectus ad dolores,
                  repellendus eaque aliquid harum molestiae cumque
                </p>
              </li>
            </ul>
          </li>
          <li>
            <a href="">
              <img
                src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
                class="w-12 rounded-full inline-block"
                alt=""
              />
              <span class="text-base font-bold">Shakil Sarder</span>
            </a>
            <p class="ml-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              earum ipsum officiis voluptas architecto, modi quaerat eos sed
              quos dignissimos dolorem delectus ad dolores, repellendus eaque
              aliquid harum molestiae cumque
            </p>
            <ul class="ml-12 mt-2">
              <li>
                <a href="">
                  <img
                    src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
                    class="w-12 rounded-full inline-block"
                    alt=""
                  />
                  <span class="text-base font-bold">Shakil Sarder</span>
                </a>
                <p class="ml-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam earum ipsum officiis voluptas architecto, modi quaerat
                  eos sed quos dignissimos dolorem delectus ad dolores,
                  repellendus eaque aliquid harum molestiae cumque
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="option == 'certificket'" class="mt-5">
      <div class="border p-2 flex flex-wrap">
        <img
          src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
          alt=""
          class="w-1/4 p-2"
        />
        <img
          src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
          alt=""
          class="w-1/4 p-2"
        />
        <img
          src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
          alt=""
          class="w-1/4 p-2"
        />
        <img
          src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
          alt=""
          class="w-1/4 p-2"
        />
        <img
          src="//s.alicdn.com/@sc01/kf/Ub76f81c973bd4d43bf47a67d0f098cb8v.jpg"
          alt=""
          class="w-1/4 p-2"
        />
      </div>
    </div>
  </fragment>
</template>
<script>
export default {
  data() {
    return {
      option: "comment"
    };
  },
  methods: {
    ShowOption(arg) {
      this.option = arg;
      console.log(this.option);
    }
  }
};
</script>
