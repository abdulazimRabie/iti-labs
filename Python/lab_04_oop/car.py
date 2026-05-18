class Car:
    def __init__(self, name, fuelRate=100, velocity=0):
        self.name = name
        self.fuelRate = fuelRate
        self.velocity = velocity

    @property
    def fuelRate(self):
        return self._fuelRate

    @fuelRate.setter
    def fuelRate(self, value):
        self._fuelRate = max(0, min(value, 100))

    @property
    def velocity(self):
        return self._velocity

    @velocity.setter
    def velocity(self, value):
        self._velocity = max(0, min(value, 200))

    def run(self, velocity, distance):
        self.velocity = velocity
        remain = distance

        while remain > 0 and self.fuelRate > 0:
            move = min(10, remain)
            remain -= move
            self.fuelRate -= 10

        self.stop(remain)

    def stop(self, remain_distance):
        self.velocity = 0

        if remain_distance == 0:
            print("Arrived to destination")
        else:
            print(f"Stopped. Remaining distance: {remain_distance} km")

    def to_dict(self):
        return {
            "name": self.name,
            "fuelRate": self.fuelRate,
            "velocity": self.velocity
        }