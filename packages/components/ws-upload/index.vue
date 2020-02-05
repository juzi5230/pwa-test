<template>
  <div>
    <div class="upload-wrapper">
      <img class="camera" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAUbElEQVR4Xu2dCdS11RTH/yFDhoQMSRpERCWa0EATmQrRQIYyF5VVGQu1SmmUKJGhSRlSMlSKKCSZikITEqEoMivr93Xu2/3e7x3OPvc+9znD3mu962txznPO+e/zv2faw2JycQQcgVkRWMyxcQQcgdkRcIL47HAE5kDACeLTwxFwgvgccATSEPAVJA03r9UIAk6QRhTtw0xDwAmShpvXagQBJ0gjivZhpiHgBEnDzWs1goATpBFF+zDTEHCCpOHmtRpBwAnSiKJ9mGkIOEHScPNajSDgBGlE0T7MNAScIGm4ea1GEHCCNKJoH2YaAk6QNNy8ViMIOEEaUbQPMw0BJ0gabl6rEQScII0o2oeZhoATJA03r9UIAk6QRhTtw0xDwAmShpvXagQBJ0gjivZhpiHQMkE2kbSppLUkrSBp+TQIq611raRrJF0k6WxJX692pHMMrEWCLCPpo5Ke1aLCRxjzGZJ2kvTHEb5RXNXWCAIpTpa0ZHGayqPDkGNrSefn0Z3ue9ESQV4j6ZjuIW2ihW0kndLCSFshyJqSvitp8RaUOoEx/l3S6pKunEBbvTbRAkEgxRWSVuwV6foa5/C+bn3DWnhELRBkD0kH1a7Insb3Ukkn9tT2RJptgSC/krTcRNBsr5FvStqw5mHXTpDVJP24ZgVmMLalJP0lg3500oXaCfJCSZ/tBDn/6ACBDSR9q1Y4aicID1vH1qq8TMa1vaSTMunL2LtRO0F2lXRYAmr/kPQhSWcm1C2xyvMlvU7SPRM6D8ZHJNQrokrtBNlN0qFGTVwoaavWTCokPVTSFyU92YgXGB9urFNMcSfIwqr6friV4SGsRbmfpO9Iepxh8E4QA1i5FbWuIPx6XpLbICbcn80lfdXQphPEAFZuRS0EuUzSE3IbQE/9uUHSgyPbdoJEApVjMQtBTpP0ghwH0UOfzpK0WWS7TpBIoHIstrukQyI7xnsJptwud7wd8YYUI2CcclMY8+3ey9R+SHeCpE0xJ0jAzQly5wTyFWRhLHwFkeQEcYLMtMb4CuIryCLzwlcQX0EWmRS+gvgK4ivIHOc0J4gTxAniBIm6yvEtlm+xfIs1B1WcIE4QJ4gTJHo19WveDq55Vwlm01FamEAhXsbfENnOqZJeElm29mKWa96jMvPa/H2IYjMWHY16SF9H0kaSniJpfUn4J5cqTpC0LVaO+r4puAHj23OupB+kdjKFIEtI2lkSkQpXSm04w3qfkfTiDPvVR5csK0gf/bO2+cvgIWp27LIShBhTe0l6oLWHBZR3gtSzgsw23dh+vVfSh2PnYyxBtpR0pKRlYz9cYDknSP0EGYzwakmvlnTefPM0hiCwDYf+2sXPIO0QZDDSAyS9fa6JPRdB7hWc+DeunRlhfP4O0h5BGPGnJRFC9X8zzfPZCEL4F/ySqw4rOQ0QX0HaJAijnlX3sxHkK5Ke2cjKMRimE6RdgjDy4yTtOH3Oz0SQAyXt2Rg5GK5vsdomCKN/raSPDM/96QQhzmoz6bWm/Qj4LZYTBAR42+OWa4EME4T/JvSNJWhYTQuNryBOEBD4/HDAimGCvErSxxJn/I3hoHNBsIP5TYOhO2Oge0CIvUX6ssdKerQk/jciGvL3oPCRP0m6JfxhNvFTST+XdKmkn9ScbiAGxFnKLC3pEZKwB2QnhFVEqunTeiFl39QKwq0ViWZig4UN95HDLaYnTaUHjlAkPz6rSnra0N8jI+rFFGELwI/R4O/ymEqNlXmIpI8npvueSgw0WEGweMUq0yL/DK+RJ1gqNVCWVYHbEO7Wyck+Cfm1pOPDDuCaSTRYUBuvD3ZY1i5jfHvBgCAEbX6S4QukB8CC90eGOjUXxYCTLeorjDh2gQnBpz8x/Tami4YK+iaruDXJD8eNnSAI2V+vMg522/ACaaxWXXFSBuwiiV+p1P1uV6D8IewKsKH7c1eNFPTdNxvTNJBWbikIYs3C9DlJLyoImC66yoEaO55YZ6wu+hD7TbbCmHm/RxL/3bJwZnuqAYAnQhCW45cbKnHQZM/bqmwXMioNbpxKweG64MODlUSr8kSj89TOEORiQ1ahMySRrqtFeVjICf70wgfPew+m3tVmpp1HP5bz9lEQ5OZwBx+jd1aaT8UUrKwM9+JfSLwGzxEKbrq2GKfvdo6DnKVP75C0X2R/z4YgtxmCN7B/+3bkx2sphi/MByQtXsuAwjhulbRNQ4lKB+p7nqTTI3V5OQS5PbIwxbjjx7+3FTk6GLDVPN53GX5Ra8CBLGJYI8TITVaC8JTPYa92ubckjBef1cFA2ft/V9IvgvkI/2KFgLkO2PKmgs8/f1wEPGbob13DdtjS9QV3/pYKBZdlDkdfMjlBFtU0Jgrc9HDjMQ7hahXnM77JNePPRvwov4A8fD07/I34uanqpF0jBV3tGX6XC2ZVUbg5QRaG6f7h151f7VEFex7Md87scNLdJ7xJ8Qi2xqgdljRlgzSGb+X6iU4Jwsex1K1R7h7MEdYecXBsn/aWdM6I37FW5/C5r6TVrBWnlSeZKWFHLWfTEZucaHULQW63riC1EuQukpgYTLJUwUT9LT1fg6PPN0raX9J9Uwci6f0Ve5V2SpBaD+mjuhmfHGyyOGjnIA+XdOyIlwwc2lP9g3LAYLY+dHpIr3EF4WCKfVmKcPvE42mu5htYFx+RePP1H0ncmiXHtU0BdAJ1fAUxgIxX3yWSiAFmFW59sMvC4y9nwXYO85InJ3SS8yaH/9zHaBmahSALPAoth7Hatlg8ej7Kgm4ou5DfckL9SVfhXQdCWyxZB308W9Lmk+5wh+05QSLBfbekfSLLDhf7ZHCMSqjaaxUeIL8U0lVYO4J/Nw+nNYifQSK0CEisHveIKDtc5Gvh1xT7tRKFlQRbOutV8O/CSlvDI6JlBWn2mhez/ecaZzgRRbDqxcivZMEL8ocJmcC4OsYStnTplCA1nEHIiPV1o5ZxWcXE47fGerkWJ/4AfhFW4fr4emulzMr7FmsehfDCvYlBaWyncJLCDKMmSYn2cbAkkiiVLL6CzKG9NcO1rkXBNZuDnySJAByx8reQRAknu1LFV5A5NMdNjCXgBNEMCf42Y+6IUmfIUL8xzsS7kH9jhYQzBKwoVXwFmUVzFmAGnyD2F3GmahaSsR5jGCB5/vDPL1U6XUFKPqS/M1i7xioW33tLtJfY7+ZYjlsti7k8jmT4uJQoph9K60t6ybZYxLNdIVKjbKkoW6tp/3QYcL7CbyVWTgn+7LHlcypnIUgz7yDEWbXcQpFEhWQqLQlGibFelBgyEpWeQ3tp0ilBSt1ifTD4ScQqk9Xj2tjClZTDSQqjxlh5maQSA5d3egYpdYt1RQh8EKP8i4KZd0zZmsrgUUlAiVjL5lLPaJ2uICUShJwnNxhm8q7Bh8JQpZqirAjbR46m1NusTglS4haLrYAlGiS2ShZCRc6nIopZgqoxoJUlXVnEyO7spIUgTfiD4DZK7o4Y+bHxujPmmyWVIUrKXw0dLtEtt1OClLjFIsrIOpFKP0jSXpFlay3GbR+3fjFyaAhUEVM2lzIWgpiveUvcYmGJG2tKgeccHnQti8WR7IsjRoLpA2cLQcxbrNJWEOsBvbTxdTHBCGhNlJYYIWzqOILsxbQ1rjIWgphXkNImkOWB8F+SyPbbulh8RbA4wCuzJGNOJ8jQDN865G+PmfRE/CZ/eetCejmLOXtpP5pOkKEZbrnixd9809bZEcbPg+GSkVgQTojQSaWIE2RIUxZTboz1rH7qpUwKaz8tlgelWfY6QYZmw5sMr+KevfdO4PDZx3c/RkpLy9cpQUq75iWHOenTYgRDPc4sLnfkY4xN1rpzSPNQCm5urDikKV7QYwMw1xZBcJQJe66kZ0R+4JUhlXhk8d6LdbqClHZjQURAnHtiBNdaXGxdpO9JWisSCMzkCcVainRKkNK2WM80RF4nMJw14mApk8LaT8shnZs/bgBLkU63WKURhGDN5AWMEYz0eANwsQU0J0UCPjSlSKcEKW2LZQJDUg2RA0edqCsZTdhLcw/odItVGkGYLGSZjQ1SvbGk80adYYXXtwRwwCd9lFRvfUDlBJmG+o8MJiR7hvx8fSgulzYt1rwc5mNdCXIZnxNkmiZONbxvfHnMucdzmRSWfpwvaYPICsdL2iGybC7FOiVIaYd0lELI/v0itdP6QZ2ADZYcIGT1xWmqJDGdS62B40okCG8bFxo0yK/ntwzlayr6HEk4QcUKcbTYwpYknRKkxEP63YKfdayvBy/v+Fq3KJjb8PAXI1j8EjzOkuMy5rtdl+l0i1UiQQCcNM08GsYINzNLh9uvmPK1lMEt+Q+SFo8cUKm2a50SpMQtFvrezbhXJr84yTpbkt0lHWIY8KslfdRQPpeivsWaQRP4ppM67K6RWiIvCDnUS9s+RA5vkWJsQ38laZnIDxCbF0zZZpUmna4gpW6xUCLh+i35vnGeskQ8L22iDPfXYvVMPa7OX1LogDslSKlbLHRpidZBedxIcSdtQa6StKJhoKV5EQ4PrdMtVskE4RaLbdZSholACgRSIdQs5GB8r2GAZPpd1lA+t6KWFaT6uFjTlbOvJDJNxQp7bFIhlLjXjhkjP3i/NNiq8U0O84fFfDzTMhaCVB8Xa7qOWD2ISk6o/1g5XdKWsYULKseFBa4AmKvHClEqsXj+R2yFDMs5QeZRylGS3mBUXIkmFfMNkVWAVA8WYSu2j6VChmU7JUjJZ5CBriwADet3Q2MatwznxlSXuIH6tLGDt4SD/I3GerkVN+nfaotV8jXvsKIsBoyDehgy4i9ycW4aN/ZnC0lsG3n7sAgxxo61VMi0rIUg5jNIDSvIQG+XS1rFqEQO66wkhCktUTaTdFZCxzHejDWBT/j8RKt0es1bywqCRtYLVr6sohaBJJsUFm6T8fF2cZrxxop6/5b0+HDbZcEp17KdriA1EQQFvi8xYc6tgSQk5ylBCIh3UsK2irHVlrPRCWKYsezDcRuNzQ8+/GnSJWCiwcTLVVgdcaHlMdC6UjKmGj0snSDG2cpDILkJU4MPcHAl/CZbkZyE6OyYpLMdTBHeizDYrO2RtFOC1HRIH540ljwiM022qyW9VdJnUmZiB3UI2s2q8aARvv00oyfmCE1NtKqFIGZTk1oJgoaY4AeMqCoMHDHFIBFmH8L7xv5Gw8OZ+rmdIQ1bH+Mcpc1OCVLbIX060MdI4r5/VDlH0tslfX/UD0XWxxTmPWMKnfq2cHkR2XRxxSwEafodZDbN8oj2vDGp/QchsDNbLxJejlMIRoH/+AskLT+mD2OGw3mqZvF3kBG1ixEf7rbbj/id6dV/qjvybvCXsrLgK05KAlYLCBzr/Rc7jBrsrGLG6itIDEoRZax+EhGfnCqC2QorCq69V0r6k6Sbwr8QlMP1A4NbK6/9pFrmRqkrackHv9MVpOZD+kyTj1XkhK5mZQbfxfCQHCotxSO2rCDmW6zaD+kzzVl+vclfuGoGE3qcXSAP4baSbhjnRwv4loUg5kN6iwRB50SHP1zS6wqYAPN18b/Bp4Mr7Vaitgxj4gSZb4aM8P9zSCby4rhujUboSlJVzGqIZ1WqNXLSoKdVcoKMA8U5vsFqwhvHXgmWsR13bdbP4yrL+wYBKFpcNSa2grR2SJ9rQj8qPM7x6pyzHBmilnBT5iJ1eovV6hlkron1uGDeEZtXfBKTlMiHxwUC/24SDRbURqdbLF9BZp8JmMzvKOllPSYDvS48cmJhTChRl0UR6HQFcYLETbmtJL08vHynmtHHtST9MUSv5/KgLyPJ2L7mUM4JkoMWhvqwuiRMx/l7kqSVR+zfD4Opyjck4dGIqb1LPAKdEsTPIPGKmKsk2zH8vImHSxIaVhlytPPHLRMhdm4O/3K4xiTlsvDveHrQ7lcsZ5AFL+n4Vy8RidcawfsusrgXcwSyQ2BNQ8CNv0EQTA3I9RAjJUf1jhmfl6kfAUsexushiCWP+N6SCADt4giUioAlgPnFEARnnhdFjhYypUQAify8F3MEOkcAN4PYi5ITIIg1DCeebN/pfBjegCMwfgSwpTvX8Nm3QJB1wnVhbL2vSdo0trCXcwQyQuAiSWsb+vOEQTAxHpssIWJ2kfRBQ0Ne1BHoGwESJ1nOz9eSPGlAkJRoHnjb5RxVsG+FePv5IPB6SR8ydudgSXsMCELEcl5mreIriRUxLz9pBPYL52xru6tJunQ4Xuv5iSHuSa+MrwE3XC6OQC4IkFqOLFqWFHODvuNiveBmd5gga4VAzqkDvFDSJ8IrJValnGtcHIFJIcBjN3ZW7Ibw0cHuLVXw9SE19iIRv08JUS5SP+z1HIHSEcDBjNjGC2R6SHwY+DNJ9yl9lN5/RyABAXLAY0Q6FdF+ppwRhLMkbL6LI9ASAreF7RmpsadktqQqBELG7srFEWgFgR0kHT99sHNlHeIemPzgLo5A7QjwTnL0TIOcLy0XAY2JUeviCNSIAM5pxBA4cbbBzUcQ6hG79eMGp6oagfQx1YcAflCEXiUE66wSQxAq4xp6oMEsvj44fUQ1IcB2ip3RvLHCYgkyAIdXSWK6blQTWj6WZhDAdpALqOhkRlaCDJBcP6RAZvsV68/ejBZ8oFkhQIoHLDwIi3S5tWepBBluB7KsJ4nn+WXD38NDtA5rf7y8I5CKANslQiARSfI3kq4IWXpHshEcB0FSB+T1HIHsEXCCZK8i72CfCDhB+kTf284eASdI9iryDvaJgBOkT/S97ewRcIJkryLvYJ8IOEH6RN/bzh4BJ0j2KvIO9omAE6RP9L3t7BFwgmSvIu9gnwg4QfpE39vOHgEnSPYq8g72iYATpE/0ve3sEXCCZK8i72CfCDhB+kTf284eASdI9iryDvaJgBOkT/S97ewRcIJkryLvYJ8IOEH6RN/bzh4BJ0j2KvIO9omAE6RP9L3t7BFwgmSvIu9gnwg4QfpE39vOHgEnSPYq8g72iYATpE/0ve3sEfg/xwDMC0q+cRQAAAAASUVORK5CYII=">
      <input type="file" @change="change" ref="file" accept="image/*" multiple>
    </div>
    <div class="upload-progress-wrap">
      <div class="upload-progress" v-for="(file, index) in files" :key="index">
        <div class="upload-file">
          <div v-if="file.progress !== 100">
            <i class="weui-loading"></i>
            <p class="upload-progress-p">{{file.progress}}%</p>
          </div>
          <img v-else :src="file.cystorage.contextFileUrl">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// let wsUpload = require('ws-upload-sdk')
import wsUpload from 'ws-upload-sdk'

export default {
  methods: {
    change (e) {
      let files = e.target.files
      this.uploader = new wsUpload({
        wsUrl: 'ws://10.4.80.30:2426/websocket',
        files: files,
        wsOption: {
          md5: true
        }
      })
      this.uploader.on('start', (file, files) => {
        this.files = files
      })
      this.uploader.on('progress', (file, files) => {
        this.files = files
      })
      this.uploader.on('allUploaded', (files) => {
        this.files = files
      })
      this.uploader.upload()
    }
  },
  data () {
    return {
      uploader: null,
      files: []
    }
  }
}
</script>

<style scoped lang="less">
@import '../../styles/weui/widget/weui-loading/weui-loading.less';

.upload-wrapper {
  position: relative;
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin:0 60px;
}
.camera {
  width: 40px;
  height: 40px;
}
.upload-wrapper input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  height: 100%;
  width: 100%;
  font-size: 10000px;
  cursor: pointer;
}
.file-wrapper img {
  max-height: 100px;
  max-width: 100%;
}

.upload-progress {
  width: 30%;
  height: 0;
  padding-top: 30%;
  position: relative;
  margin: 5px; 
}
.upload-progress > * {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.upload-progress-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.upload-file {
  vertical-align: middle;
  background: rgba(0, 0, 0, 0.15);
  display:flex;/*Flex布局*/
  display: -webkit-flex; /* Safari */
  align-items:center;/*指定垂直居中*/
  justify-content: center;
}
.upload-file img {
  max-width: 100%;
  max-height: 100%;
}
</style>
