const IN_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    IN_PRODUCTION &&
      require('@fullhuman/postcss-purgecss')({
        content: [
          `./public/**/*.html`,
          `./src/**/*.vue`,
          `./node_modules/vuetify/dist/vuetify.js`, // この行を追加しないとvuetifyのすべてのスタイルが吹っ飛ぶ
        ],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ''
          )
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
            ) || []
          )
        },
        /**
         * vueやvue-routerのつけるなどをsafelistにいれておく
         */
        safelist: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
          //vuetifyのユーティリティクラスなどもsafelistにいれる
          /^v-((?!application).)*$/,
          /^theme--*/,
          /.*-transition/,
          /^justify-*/,
          /^p*-[0-9]/,
          /^m*-[0-9]/,
          /^text--*/,
          /--text$/,
          /^row-*/,
          /^d-*/,
          /col-*/,
        ],
      }),
  ],
}
