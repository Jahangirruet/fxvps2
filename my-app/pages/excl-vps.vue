<template>
  <NuxtLayout>
    <section
      class="sm:px-4 pb-10 md:pb-20 xl:pb-32 pt-8 md:pt-20 overflow-x-clip"
    >
      <div class="container mx-auto space-y-12">
        <div
          class="px-4 py-6 sm:p-8 md:p-12 lg:p-16 sm:rounded-[3rem] bg-opacity-50 bg-white border border-gray-300 relative space-y-8 xl:space-y-14"
        >
          <div class="space-y-6 md:space-y-10">
            <div class="space-y-3">
              <h2 class="text-xl md:text-2xl font-bold">EXCLUSIVE VPS</h2>
              <p class="text-base md:text-lg text-black !leading-[1.6]">
                Most of our servers are powered with HDD(Hard Drive Disk)-Raid
                10 hardware technology. This featured technology will guarantee
                a lighting fast hosting.Exclusive VPS servers are optimized for
                all types of platforms (IOS, Android, Linux, Windows) & devices
                (Tab, Laptop, Smartphone, desktop).
              </p>
            </div>
            <table
              class="w-full rounded-[2rem] overflow-hidden border-collapse"
            >
              <thead>
                <tr
                  class="bg-secondary bg-opacity-10 hidden xl:flex flex-col xl:flex-row"
                >
                  <th
                    class="flex items-center justify-center xl:justify-start text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:pl-8"
                  >
                    Plan Name
                  </th>
                  <th
                    class="flex items-center justify-center text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:px-5 text-center"
                  >
                    RAM
                  </th>
                  <th
                    class="flex items-center justify-center text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:px-5 text-center"
                  >
                    Instances
                  </th>
                  <th
                    class="flex items-center justify-center text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:px-5 text-center"
                  >
                    CPU
                  </th>
                  <th
                    class="flex items-center justify-center text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:px-5 text-center"
                  >
                    Disk Space
                  </th>
                  <th
                    class="flex items-center justify-center text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:px-5 text-center"
                  >
                    Price <br />
                    1/month
                  </th>
                  <th
                    class="flex items-center justify-center text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:px-5 text-center"
                  >
                    Price <br />
                    3/month
                  </th>
                  <th
                    class="flex items-center justify-center text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:px-5 text-center"
                  >
                    Price <br />
                    6/month
                  </th>
                  <th
                    class="flex items-center justify-center text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:px-5 text-center"
                  >
                    Price <br />
                    1/year
                  </th>
                  <th
                    class="flex items-center justify-center text-black font-bold xl:basis-[10%] py-3 xl:py-8 text-base xl:pr-8 text-center"
                  >
                    Order VPS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="odd:bg-primary pb-2 xl:pb-0 odd:bg-opacity-20 even:bg-opacity-10 even:bg-secondary flex flex-col xl:flex-row"
                >
                  <td
                    class="flex justify-center xl:justify-start items-center text-black xl:basis-[10%] py-2 xl:py-6 text-sm xl:pl-8"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Plan Name:</span
                    >
                    EXCL 1
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden">RAM:</span>
                    6GB
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Instances:</span
                    >
                    1-8* MT4/MT5/ cTrade
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Disk Space:</span
                    >
                    50GB
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden">
                      CPU :
                    </span>
                    2 Core
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 1/month:
                    </span>
                    $25.90 /month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 3/month:
                    </span>
                    $24.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 6/month:</span
                    >
                    $23.83/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 1/year:</span
                    >
                    $19.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <div class="flex justify-center items-center">
                      <span class="text-base font-bold pr-2 xl:hidden"
                        >Order VPS:</span
                      >
                      <a
                        href="#"
                        class="text-sm text-white bg-secondary rounded-full px-6 py-2 hover:bg-opacity-80"
                        >Configure</a
                      >
                    </div>
                  </td>
                </tr>
                <tr
                  class="odd:bg-primary pb-2 xl:pb-0 odd:bg-opacity-20 even:bg-opacity-10 even:bg-secondary flex flex-col xl:flex-row"
                >
                  <td
                    class="flex justify-center xl:justify-start items-center text-black xl:basis-[10%] py-2 xl:py-6 text-sm xl:pl-8"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Plan Name:</span
                    >
                    EXCL 2
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden">RAM:</span>
                    12GB
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Instances:</span
                    >
                    1-15* MT4/MT5/ cTrade
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Disk Space:</span
                    >
                    100GB
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden">
                      CPU :
                    </span>
                    3 Core
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 1/month:
                    </span>
                    $36.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 3/month:
                    </span>
                    $34.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 6/month:</span
                    >
                    $32.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 1/year:</span
                    >
                    $28.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <div class="flex justify-center items-center">
                      <span class="text-base font-bold pr-2 xl:hidden"
                        >Order VPS:</span
                      >
                      <a
                        href="#"
                        class="text-sm text-white bg-secondary rounded-full px-6 py-2 hover:bg-opacity-80"
                        >Configure</a
                      >
                    </div>
                  </td>
                </tr>
                <tr
                  class="odd:bg-primary pb-2 xl:pb-0 odd:bg-opacity-20 even:bg-opacity-10 even:bg-secondary flex flex-col xl:flex-row"
                >
                  <td
                    class="flex justify-center xl:justify-start items-center text-black xl:basis-[10%] py-2 xl:py-6 text-sm xl:pl-8"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Plan Name:</span
                    >
                    EXCL 3
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden">RAM:</span>
                    24GB
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Instances:</span
                    >
                    1-20* MT4/MT5/ cTrade
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Disk Space:</span
                    >
                    150GB
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden">
                      CPU :
                    </span>
                    4 Core
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 1/month:
                    </span>
                    $49.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 3/month:
                    </span>
                    $46.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 6/month:</span
                    >
                    $43.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 1/year:</span
                    >
                    $37.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <div class="flex justify-center items-center">
                      <span class="text-base font-bold pr-2 xl:hidden"
                        >Order VPS:</span
                      >
                      <a
                        href="#"
                        class="text-sm text-white bg-secondary rounded-full px-6 py-2 hover:bg-opacity-80"
                        >Configure</a
                      >
                    </div>
                  </td>
                </tr>
                <tr
                  class="odd:bg-primary pb-2 xl:pb-0 odd:bg-opacity-20 even:bg-opacity-10 even:bg-secondary flex flex-col xl:flex-row"
                >
                  <td
                    class="flex justify-center xl:justify-start items-center text-black xl:basis-[10%] py-2 xl:py-6 text-sm xl:pl-8"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Plan Name:</span
                    >
                    EXCL 4
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden">RAM:</span>
                    48GB
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Instances:</span
                    >
                    1-35* MT4/MT5/ cTrade
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Disk Space:</span
                    >
                    200GB
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden">
                      CPU :
                    </span>
                    6 Core
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 1/month:
                    </span>
                    $99.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 3/month:
                    </span>
                    $95.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 6/month:</span
                    >
                    $91.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <span class="text-base font-bold pr-2 xl:hidden"
                      >Price 1/year:</span
                    >
                    $85.90/month
                  </td>
                  <td
                    class="flex justify-center text-black items-center text-center xl:basis-[10%] py-2 xl:py-6 text-sm xl:px-5"
                  >
                    <div class="flex justify-center items-center">
                      <span class="text-base font-bold pr-2 xl:hidden"
                        >Order VPS:</span
                      >
                      <a
                        href="#"
                        class="text-sm text-white bg-secondary rounded-full px-6 py-2 hover:bg-opacity-80"
                        >Configure</a
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script></script>

<style></style>
