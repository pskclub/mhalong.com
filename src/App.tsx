import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'

const App: Component = () => {
  const [newTitle, setTitle] = createSignal('im pskclub')

  return (
    <div class={'font-bold text-xl h-full'}>
      <div class={'relative min-h-full flex flex-col items-center justify-center py-8'}>
        <img src="/cover.webp" alt="" class={'h-full object-cover w-full absolute -z-10 opacity-20'}/>
        <div class={'h-full w-full absolute bg-gradient-to-b from-secondary to-transparent'}></div>
        <div class={'z-10 px-2'}>
          <img
            title={'Passakon Puttasuwan'}
            src="/profile.png"
            alt="Passakon Puttasuwan"
            width={300}
            height={300}
            loading="lazy"
            class={'mx-auto w-[80%] max-w-[250px] md:w-[250px] rounded-full border-8 border-primary'}/>
          <h1 class={'text-center text-2xl md:text-4xl font-bold mt-8'} title={'Passakon Puttasuwan'}>Passakon Puttasuwan</h1>
          <p class={'text-lg md:text-xl text-center mt-1'} title={'Software Engineer'}>Software Engineer</p>
          <p class={'text-sm md:text-lg text-center font-medium mt-1'} title={'long@mhalong.com'}>long@mhalong.com</p>
          <div class={'flex space-x-3 mt-8 justify-center'}>
            <a href="https://blog.mhalong.com" target={'_blank'} title={'medium'}>
              <div class={'p-3 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-black'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-medium w-6 h-6" viewBox="0 0 16 16">
                  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                </svg>
              </div>
            </a>
            <a href="https://www.facebook.com/itcyberclub" target={'_blank'} title={'facebook'}>
              <div class={'p-3 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-black'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-facebook w-6 h-6" viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </div>
            </a>
            <a href="https://github.com/pskclub" target={'_blank'} title={'github'}>
              <div class={'p-3 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-black'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github w-6 h-6" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/pskclub" target={'_blank'} title={'linkedin'}>
              <div class={'p-3 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-black'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin w-6 h-6" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </div>
            </a>
          </div>
          <div class={'flex space-x-3 mt-8 justify-center items-center flex-wrap space-y-3 md:max-w-[50%] mx-auto'}>
            <img src="https://seeklogo.com/images/G/go-logo-046185B647-seeklogo.com.png" alt="" title="golang" class={'w-10'}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" title="react" alt="" class={'w-10'}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="" title="vuejs" class={'w-10'}/>
            <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="" class={'w-10'} title="nodejs"/>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="" class={'w-10'} title="typescript" />
            <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="" class={'w-10'} title="docker"/>
            <img src="https://upload.wikimedia.org/wikipedia/labs/thumb/b/ba/Kubernetes-icon-color.svg/2110px-Kubernetes-icon-color.svg.png" alt="" class={'w-10'} title="kubernetes" />
            <img src="https://img.icons8.com/color/12x/elasticsearch.png" alt="" class={'w-10'} title="elasticsearch"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/2560px-AWS_Simple_Icons_AWS_Cloud.svg.png" title="aws" alt="" class={'w-10'}/>
            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/89_Digital_Ocean-512.png" alt="" class={'w-10'} title="digitalocean"/>
            <img src="https://lirp.cdn-website.com/aa0ef369/dms3rep/multi/opt/google-cloud-icon-400w.png" alt="" class={'w-10'} title="google cloud"/>
            <img src="https://miro.medium.com/max/1200/1*R2xjlenkeMzVLcdhkIF-og.png" alt="" class={'w-10'} title="tendermint"/>
            <img src="https://play-lh.googleusercontent.com/_wG4e51ZcYqYr4Z6E75IdHIstnnqHm3jAGclecZG-MdRwZRg9SZOrHCaKiBjoS35V3iR=w240-h480-rw" alt="" class={'w-10'} title="laravel"/>
            <img src="https://symbols.getvecta.com/stencil_85/20_jest-icon.aff64ab210.png" alt="" class={'w-10'} title="jest"/>
            <img src="https://avatars.githubusercontent.com/u/8908513?s=280&v=4" alt="" class={'w-10'} title="cypress"/>
            <img src="https://user-images.githubusercontent.com/51419598/152648731-567997ec-ac1c-4a9c-a816-a1fb1882abbe.png" alt="" class={'w-10'} title="flutter"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" alt="" class={'w-10'} title="kotlin"/>
            <img src="https://coryrylan.com/assets/images/posts/types/firebase.svg" alt="" class={'w-10'} title="firebase"/>
            <img src="https://avatars.githubusercontent.com/u/107424?s=200&v=4" alt="" class={'w-10'} title="jenkins"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1200px-IntelliJ_IDEA_Icon.svg.png" alt="" class={'w-10'} title="intelij"/>
            <img src="https://static.cdnlogo.com/logos/m/30/mongodb-icon.svg" alt="" class={'w-10'} title="mongodb"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="" class={'w-10'} title="postgres"/>
            <img src="https://www.svgrepo.com/show/303576/rabbitmq-logo.svg" alt="" class={'w-10'} title="rabbitmq"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
