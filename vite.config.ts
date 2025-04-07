// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import dts from 'vite-plugin-dts'

// export default defineConfig({
//   plugins: [
//     react(),
//     dts({
//       insertTypesEntry: true,
//     }),
//   ],
//   build: {
//     lib: {
//       entry: './src/index.ts',
//       name: 'MessageInput',
//       formats: ['es', 'umd'],
//       fileName: (format) => `message-type-input.${format}.js`
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM'
//         }
//       }
//     }
//   }
// })





import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.css'] 
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'MessageInput',
      formats: ['es', 'umd'],
      fileName: (format) => `message-type-input.${format}.js`
    },
    cssCodeSplit: false, 
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: 'message-input.[ext]' 
      }
    }
  }
})