<template>
  <transition name="modal-fade">
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div>
        <div
                  class="modal-content w-full sm:w-10/12 lg:w-8/12 bg-white rounded-xl -translate-y-20 transition-all duration-300"
                >
                  <header
                    class="flex py-6 px-4 md:px-8 justify-between items-center border-b border-gray-200"
                  >
                    <h2 class="text-gray-500 font-medium text-lg md:text-xl">
                      XM | Procedure of Transferring Existing Account Under Our
                      IB
                    </h2>
                    <button type="button" class="close-modal">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </header>
                  <div
                    class="px-4 md:px-8 py-5 overflow-y-auto max-h-[calc(100vh-200px)]"
                  >
                    <ul class="grid gap-2.5 pb-4 border-b border-gray-100">
                      <li class="flex items-start gap-3">
                        <img
                          src="~/assets/images/check.svg"
                          class="shrink-0 mt-1.5"
                          alt="check.svg"
                        />
                        <p
                          class="text-base md:text-lg text-gray-500 !leading-[1.6]"
                        >
                          It's easy !!! Just sent an email from your registered
                          email address of XM.com to
                          <strong>ib@xm.com </strong> and mention our Partner ID
                          = <strong>abquddus</strong>.
                        </p>
                      </li>
                      <li class="flex items-start gap-3">
                        <img
                          src="~/assets/images/check.svg"
                          class="shrink-0 mt-1.5"
                          alt="check.svg"
                        />
                        <p
                          class="text-base md:text-lg text-gray-500 !leading-[1.6]"
                        >
                          Close your all current and pending trading orders
                          before sending your email to broker support.
                        </p>
                      </li>
                    </ul>
                    <div class="py-6">
                      <div class="flex justify-center pb-10">
                        <h3
                          class="border-b border-black font-bold text-2xl text-center inline-block"
                        >
                          Email Format
                        </h3>
                      </div>
                      <div class="border-b border-gray-100 pb-5">
                        <p class="text-base md:text-lg text-gray-600">
                          <strong>Email:</strong> ib@xm.com
                        </p>
                        <p class="text-base md:text-lg text-gray-600">
                          <strong>Email subject:</strong> Transfer my account
                          under an IB .
                        </p>
                        <p class="text-base md:text-lg text-gray-600">Hello,</p>
                        <p class="text-base md:text-lg text-gray-600">
                          I want to transfer my following trading account number
                          under the following refferal ID. <br />
                          My Trading Account Number : --------<br />
                          Partner ID : <strong>abquddus</strong><br />
                          Please transfer my trading account number under the
                          following IB as soon as possible .<br />
                          Sincerely,<br />
                          ----------<br />
                        </p>
                      </div>
                      <ul class="grid gap-2.5 pb-4 border-b border-gray-100">
                        <li class="flex items-start gap-3">
                          <img
                            src="~/assets/images/check.svg"
                            class="shrink-0 mt-1.5"
                            alt="check.svg"
                          />
                          <p
                            class="text-base md:text-lg text-gray-500 !leading-[1.6]"
                          >
                            After getting the corfirmation from the broker
                            forward that email to our email
                            <strong>support@fxvps.pro</strong> or fill up the
                            signal subscription activation form using this
                            <a target="_blank" href="http://eepurl.com/bvt6bT"
                              >Link</a
                            >.
                          </p>
                        </li>
                        <li class="flex items-start gap-3">
                          <img
                            src="~/assets/images/check.svg"
                            class="shrink-0 mt-1.5"
                            alt="check.svg"
                          />
                          <p
                            class="text-base md:text-lg text-gray-500 !leading-[1.6]"
                          >
                            If you don't get reply from broker support email,
                            then you can take help from their live chat support.
                          </p>
                        </li>
                      </ul>
                      <div class="flex justify-center pb-10">
                        <h3
                          class="border-b border-black font-bold text-2xl text-center inline-block"
                        >
                          Otherwise !
                        </h3>
                      </div>
                      <ul class="grid gap-2.5 pb-4 border-b border-gray-100">
                        <li class="flex items-start gap-3">
                          <img
                            src="~/assets/images/check.svg"
                            class="shrink-0 mt-1.5"
                            alt="check.svg"
                          />
                          <p
                            class="text-base md:text-lg text-gray-500 !leading-[1.6]"
                          >
                            Open a new fresh account using our XM IB
                            <a
                              target="_blank"
                              href="http://clicks.pipaffiliates.com/afs/come.php?id=59&cid=21394&ctgid=17&atype=1"
                              >Link</a
                            >
                            and transfer your money from old account to new
                            account.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
      </div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="~/assets/images/close-icon.svg" alt="" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    greetingMessage: String,
  },
};
</script>

<style scoped>

.modal-active {
  visibility: visible !important;
  opacity: 1 !important;
}

.modal-active .modal-content {
  --tw-translate-y: 0px !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.modal {
  text-align: center;
  background-color: white;
  height: auto;
  width: auto;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  /* font-weight: 500; */
  font-size: 16px;
  margin: 20px 0;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
