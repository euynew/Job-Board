module Api
  module V1
    class JobsController < ApplicationController
      def index
        jobs = Job.all

        render json: JobSerializer.new(jobs).serializable_hash.to_json
      end
    end
  end
end
