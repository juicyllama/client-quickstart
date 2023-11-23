## Install All Repos ##

### Note: You must first install the JuicyLlama framework - https://docs.juicyllama.com/#installation ###

rm -rf pnpm-lock.yaml

cd ./backend || (echo 'Cannot find backend directory' && exit)
echo 'Installing backend project'
rm -rf node_modules
rm -rf pnpm-lock.yaml
pnpm install --shamefully-hoist || (echo 'Cannot install backend packages' && exit)
pnpm run link || (echo 'Cannot link backend project packages' && exit) 
npx jl install || (echo 'Cannot install backend project' && exit)


######### TEMP FIX: https://github.com/orgs/juicyllama/projects/8/views/1?pane=issue&itemId=45264661

cd node_modules/@nestjs
rm -rf core/
ln -s ../../../../../framework/node_modules/@nestjs/core || ln -s ../../../../framework/node_modules/@nestjs/core || (echo 'Cannot find framework folder on local file system' && exit)

##########

cd ..