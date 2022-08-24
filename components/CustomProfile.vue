<template>
  <div v-bind="$attrs" class="cursor-pointer rounded-md">
    <img
      :src="src"
      :id="'photo' + uuid"
      alt=""
      class="border-1 border-black rounded w-[200px] min-h-[200px]"
      data-bs-toggle="modal"
      :data-bs-target="'#' + uuid"
      @click="selecttype = 0"
    />

    <div
      class="modal fade"
      :id="uuid"
      tabindex="-1"
      :aria-labelledby="uuid + 'label'"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content min-h-[200px]">
          <div class="modal-header">
            <h5 class="modal-title" :id="uuid + 'label'">จัดการรูป Profile</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="fnclose"
            ></button>
          </div>
          <div class="modal-body">
            <div v-show="selecttype == 0" selectdevice>
              <img
                :src="src"
                :id="'photo1' + uuid"
                alt=""
                class="border-1 border-black rounded w-[200px] min-h-[200px]"
                @click="cropimg"
              />
            </div>
            <div v-show="selecttype == 1" usecamera>
              <video
                class="w-full"
                :id="'vdo' + uuid"
                autoplay
                muted
                playsinline
              ></video>
              <canvas :id="'canvas' + uuid" class="hidden"></canvas>
              <input
                class="btn btn-primary"
                type="button"
                value="Snap"
                @click="precrop"
              />
            </div>
            <div v-show="selecttype == 2" fileupload>
              <div class="custom-file-upload !h-[100px]" id="fileUpload1">
                <input
                  type="file"
                  id="file-input"
                  accept="image/*;"
                  capture="camera"
                  class="
                    w-0
                    h-0
                    top-0
                    left-0
                    absolute
                    opacity-0
                    overflow-hidden
                  "
                  @change="uploadchange"
                />
                <label for="file-input" class="text-center">
                  <div class="text-center">
                    <img
                      width="64"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OS4wMTggNTkuMDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OS4wMTggNTkuMDE4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJtNTguNzQxIDU0LjgwOS01Ljk2OS02LjI0NGExMC43NCAxMC43NCAwIDAgMCAyLjgyLTcuMjVjMC01Ljk1My00Ljg0My0xMC43OTYtMTAuNzk2LTEwLjc5NlMzNCAzNS4zNjEgMzQgNDEuMzE0IDM4Ljg0MyA1Mi4xMSA0NC43OTYgNTIuMTFjMi40NDEgMCA0LjY4OC0uODI0IDYuNDk5LTIuMTk2bDYuMDAxIDYuMjc3YS45OTguOTk4IDAgMCAwIDEuNDE0LjAzMiAxIDEgMCAwIDAgLjAzMS0xLjQxNHpNMzYgNDEuMzE0YzAtNC44NSAzLjk0Ni04Ljc5NiA4Ljc5Ni04Ljc5NnM4Ljc5NiAzLjk0NiA4Ljc5NiA4Ljc5Ni0zLjk0NiA4Ljc5Ni04Ljc5NiA4Ljc5NlMzNiA0Ni4xNjQgMzYgNDEuMzE0ek0xMC40MzEgMTYuMDg4YzAgMy4wNyAyLjQ5OCA1LjU2OCA1LjU2OSA1LjU2OHM1LjU2OS0yLjQ5OCA1LjU2OS01LjU2OGMwLTMuMDcxLTIuNDk4LTUuNTY5LTUuNTY5LTUuNTY5cy01LjU2OSAyLjQ5OC01LjU2OSA1LjU2OXptOS4xMzggMGMwIDEuOTY4LTEuNjAyIDMuNTY4LTMuNTY5IDMuNTY4cy0zLjU2OS0xLjYwMS0zLjU2OS0zLjU2OCAxLjYwMi0zLjU2OSAzLjU2OS0zLjU2OSAzLjU2OSAxLjYwMSAzLjU2OSAzLjU2OXoiLz48cGF0aCBkPSJtMzAuODgyIDI4Ljk4NyA5LjE4LTEwLjA1NCAxMS4yNjIgMTAuMzIzYTEgMSAwIDAgMCAxLjM1MS0xLjQ3NWwtMTItMTFhMSAxIDAgMCAwLTEuNDE0LjA2M2wtOS43OTQgMTAuNzI3LTQuNzQzLTQuNzQzYTEuMDAzIDEuMDAzIDAgMCAwLTEuMzY4LS4wNDRMNi4zMzkgMzcuNzY4YTEgMSAwIDEgMCAxLjMyMiAxLjUwMWwxNi4zMTMtMTQuMzYyIDcuMzE5IDcuMzE4YS45OTkuOTk5IDAgMSAwIDEuNDE0LTEuNDE0bC0xLjgyNS0xLjgyNHoiLz48cGF0aCBkPSJNMzAgNDYuNTE4SDJ2LTQyaDU0djI4YTEgMSAwIDEgMCAyIDB2LTI5YTEgMSAwIDAgMC0xLTFIMWExIDEgMCAwIDAtMSAxdjQ0YTEgMSAwIDAgMCAxIDFoMjlhMSAxIDAgMSAwIDAtMnoiLz48L3N2Zz4="
                      style="opacity: 0.8"
                    />
                  </div>
                  <span class="text-center">
                    <strong>
                      <i>Tap to Upload</i>
                    </strong>
                  </span>
                </label>
              </div>
            </div>
            <div v-show="selecttype == 3" class="w-full" cropimage>
              <div class="flex flex-col mb-2">
                <div
                  :id="'result' + uuid"
                  class="w-full max-h-[350px] h-fit mb-2"
                ></div>
                <div class="flex justify-end mb-2">
                  <!-- <button type="button" class="btn btn-primary" @click="rotate(90)">
                                        <i class="ti-reload"></i>&nbsp;(90)
                                    </button> -->
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="rotate(45)"
                  >
                    <i class="ti-reload text-2xl"></i>&nbsp;(45)
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="zoom(0.1)"
                  >
                    <i class="dripicons-zoom-in text-2xl"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="zoom(-0.1)"
                  >
                    <i class="dripicons-zoom-out text-2xl"></i>
                  </button>
                  <button
                    type="button"
                    class="mx-2 btn btn-primary"
                    @click="croped"
                  >
                    <i class="dripicons-crop text-2xl"></i> &nbsp; Crop
                  </button>
                </div>
                <div class="w-full">
                  <img
                    ref="photo2"
                    :id="'photo2' + uuid"
                    alt=""
                    class="
                      border-1 border-black
                      rounded
                      w-[200px]
                      min-h-[200px]
                    "
                  />
                </div>
              </div>
              <button type="button" class="btn btn-primary" @click="okandsave">
                <i class="mdi mdi-content-save"></i>&nbsp; OK
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <select id="videoSource" @change="getStream" v-model="selectDevice">
              <option v-for="(device, idx) in devices" :value="device.value">
                {{ device.text }}
              </option>
            </select>
            <input
              class="btn btn-primary"
              type="button"
              value="Use Camera"
              @click="clickselecttype(1)"
            />
            <input
              class="btn btn-primary"
              type="button"
              value="File Upload"
              @click="clickselecttype(2)"
            />
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="fnclose"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mixins: [],
  props: {
    url: {
      type: String,
      default: null,
    },
    sourcepath: {
      type: String,
      default: '/assets/images/students/',
    },
  },
  data() {
    return {
      theme: 'AdminLte',
      name: 'Profile',
      uuid: '',
      src: '',
      videoElement: '',
      photoElement: '',
      canvasElement: '',
      selectDevice: '',
      selecttype: 0,
      devices: [],
      stream: '',
      result: '',
      vdow: '',
      vdoh: '',
      cropper: '',
      is_croped: 0,
      whRatio: 3 / 4,
    };
  },
  created() {
    // console.log(this.name + 'component is created');
    this.uuid = 'idx' + Math.random().toString(36).slice(-6);
    // console.log('created profile url is--->'+this.uuid,this.url);
    if (this.url) {
      this.src = this.sourcepath + this.url;
    } else {
      this.src = this.sourcepath + 'avatar.jpg';
    }
  },
  watch: {
    url(newval, oldval) {
      // console.log('watch--->'+this.uuid,this.src,newval,oldval);
      if (newval) {
        this.src = this.sourcepath + this.url;
      } else {
        this.src = this.sourcepath + 'avatar.jpg';
      }
    },
  },
  methods: {
    okandsave() {
      this.selecttype = 0;
      let imgSrc = this.cropper.getCroppedCanvas({}).toDataURL();
      this.src = imgSrc;
      this.is_croped = true;
      this.$emit('input', imgSrc);
    },
    zoom(inout) {
      this.cropper.zoom(inout);
    },
    rotate(dg) {
      this.cropper.rotate(dg);
    },
    croped() {
      let imgSrc = this.cropper.getCroppedCanvas({}).toDataURL();
      this.$refs.photo2.src = imgSrc;
    },
    async stopCamera() {
      if (this.stream) {
        let mediatracks = await this.stream.getTracks();
        mediatracks.forEach((track) => {
          track.stop();
        });
      }
    },
    precrop() {
      let context = this.canvasElement.getContext('2d');
      let height = this.videoElement.videoHeight;
      let width = this.videoElement.videoWidth;
      this.vdow = width;
      this.vdoh = height;

      if (width && height) {
        this.canvasElement.width = width;
        this.canvasElement.height = height;
        context.drawImage(this.videoElement, 0, 0, width, height);
        let datasrc = this.canvasElement.toDataURL('image/png');
        // console.log('precrop--->',datasrc);
        let img = document.createElement('img');
        img.id = 'image' + this.uuid;
        img.src = datasrc;
        this.result.innerHTML = '';
        this.result.appendChild(img);
        this.cropper = new Cropper(img, { aspectRatio: this.whRatio });
        this.selecttype = 3;
      } else {
        this.clearphoto();
      }
    },
    getBase64StringFromDataURL(dataURL) {
      return dataURL.replace('data:', '').replace(/^.+,/, '');
    },
    clearphoto() {},
    takePicture() {
      let photo = document.getElementById('photo');
      let context = this.canvasElement.getContext('2d');

      let height = this.videoElement.videoHeight;
      let width = this.videoElement.videoWidth;

      if (width && height) {
        this.canvasElement.width = width;
        this.canvasElement.height = height;
        context.drawImage(this.videoElement, 0, 0, width, height);
        let data = this.canvasElement.toDataURL('image/png');
        // console.log('data src==>',data);
        this.src = data;
      } else {
        this.clearphoto();
      }
    },
    cropimg() {
      if (this.is_croped || this.url) {
        this.selecttype = 3;
        fetch(this.photoElement.src)
          .then((res) => res.blob())
          .then((blob) => {
            // Read the Blob as DataURL using the FileReader API
            const reader = new FileReader();
            reader.onloadend = () => {
              // console.log('reader.result',reader.result);
              // // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

              // // Convert to Base64 string
              // const base64 = this.getBase64StringFromDataURL(reader.result);
              // console.log('base64',base64);
              // // Logs wL2dvYWwgbW9yZ...
              let img = document.createElement('img');
              img.id = 'image' + this.uuid;
              img.src = reader.result;
              this.result.innerHTML = '';
              this.result.appendChild(img);
              this.cropper = new Cropper(img, { aspectRatio: this.whRatio });
            };
            reader.readAsDataURL(blob);
          });
      } else {
        alert('กรุณา ถ่ายรูป หรือ เลือกรูปจากไฟล์ ก่อน');
      }
    },
    fnclose() {
      // this.selecttype = 0
    },
    uploadchange(e) {
      if (e.target.files.length) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target.result) {
            let img = document.createElement('img');
            img.id = 'image' + this.uuid;
            img.src = e.target.result;
            // console.log('upload e.target.result--->',e.target.result);
            this.result.innerHTML = '';
            this.result.appendChild(img);
            this.cropper = new Cropper(img, { aspectRatio: this.whRatio });
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      }
      this.selecttype = 3;
    },
    clickselecttype(type) {
      // console.log('type--->',type);
      this.selecttype = type;
      if (type == 1) {
        // console.log('getStream--start');
        this.getStream();
      } else {
        this.stopCamera();
      }
    },
    async getdevices() {
      if (this.stream) {
        let mediatracks = await this.stream.getTracks();
        mediatracks.forEach((track) => {
          track.stop();
        });
      }
      let deviceInfos = await navigator.mediaDevices.enumerateDevices();
      // console.log('deviceInfos-->', deviceInfos)
      this.devices = [];
      deviceInfos.forEach((deviceInfo) => {
        let option = {};
        if (deviceInfo.kind === 'videoinput') {
          option.value = deviceInfo.deviceId;
          option.text = deviceInfo.label || `Camera ${this.data.length + 1}`;
          this.devices.push(option);
        }
      });
      if (this.devices.length > 0) {
        this.selectDevice = this.devices[0].value;
      }
    },
    async getStream() {
      if (this.stream) {
        // console.log('this.stream-->', this.stream);
        let mediatracks = await this.stream.getTracks();
        mediatracks.forEach((track) => {
          track.stop();
        });
      }
      let constraints = {
        video: {
          deviceId: this.selectDevice
            ? {
                exact: this.selectDevice,
              }
            : undefined,
        },
      };
      // console.log('getStream-select device-->', this.selectDevice,constraints);
      this.stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoElement.srcObject = this.stream;
    },
  },
  computed: {},
  mounted() {
    this.videoElement = document.querySelector('#vdo' + this.uuid);
    this.photoElement = document.querySelector('#photo' + this.uuid);
    this.canvasElement = document.querySelector('#canvas' + this.uuid);
    this.result = document.querySelector('#result' + this.uuid);
    this.getdevices();
    window[this.uuid] = this;
    // console.log('mounted profile url is -->'+this.uuid,this.url);
  },
  components: {},
};
</script>
