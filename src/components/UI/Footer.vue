<script setup></script>

<template>
  <footer>
    <div class="bottom-content-wrapper-mobile">
      <div class="socials">
        <a
          href="https://www.facebook.com/groups/penspinningpl"
          target="_blank"
          title="Nasza grupa na Facebooku"
        >
          <i
            class="fa-brands fa-facebook"
            @mouseover="grow"
            @mouseleave="reset"
          ></i>
        </a>
        <a
          href="https://discord.gg/MCXEnkh"
          target="_blank"
          title="Dołącz do naszego Discorda"
        >
          <i
            class="fa-brands fa-discord"
            @mouseover="grow"
            @mouseleave="reset"
          ></i>
        </a>
        <a
          href="https://youtube.com/@penspinningpolska?si=qp99_hhrGso8WYld"
          target="_blank"
          title="Zobacz nasz kanał na YouTube"
        >
          <i
            class="fa-brands fa-youtube"
            @mouseover="grow"
            @mouseleave="reset"
          ></i>
        </a>
      </div>
      <div class="copy">
        <p>
          Strona stworzona przez: <br />
          <a
            href="https://klemensowicz.pl"
            target="_blank"
            title="Developer"
            @mouseover="growS"
            @mouseleave="reset"
            >Klemensowicz - M4k</a
          >
        </p>
      </div>
    </div>
    <div class="lines">
      <div class="line one"></div>
      <div class="line two"></div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "../../styles/base.scss" as *;

footer {
  width: 100%;

  .bottom-content-wrapper-mobile {
    display: none;

    @include Media("<", 810px) {
      display: flex;
      justify-content: space-between;
      pointer-events: none;
      padding: 2% 5%;
      margin-top: 50px;

      width: 100%;

      .socials {
        display: flex;
        gap: 25px;
        font-size: $font-size-title-s;
        pointer-events: all;

        i {
          transition: 0.25s ease;
          // filter: drop-shadow(0 0 0px $black);
        }

        i:hover {
          // color: $green;
          // filter: drop-shadow(0 0 5px $black);
          scale: 1.1;
        }
      }

      .copy {
        font-size: $font-size-small-s;

        opacity: 0.5;
        text-align: right;
        align-self: flex-end;
        pointer-events: all;

        font-family: "Inter", sans-serif;
        color: $white;

        a {
          font-size: calc($font-size-small-s * 0.9);
        }

        a:hover {
          text-decoration: none;
        }
      }
    }
  }

  .lines {
    display: flex;

    .line {
      height: 17.5px;

      &.one {
        width: 60%;
        background: $green;

        @include Media("<", 810px) {
          width: 65%;
        }
      }

      &.two {
        width: 40%;
        background: $white;

        @include Media("<", 810px) {
          width: 35%;
        }
      }
    }
  }
}
</style>
