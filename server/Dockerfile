FROM ruby:2.6.4

RUN gem install rails
RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN bundle install

CMD ["rails", "server", "-b", "0.0.0.0"]
